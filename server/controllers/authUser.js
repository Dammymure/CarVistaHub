import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"


export const userRegister = async (req, res) => {
 try {
  const {
   firstname,
   lastname,
   email,
   password,
   picturePath,
   location,
   number,
   cart
  } = req.body
  // check if a user already exists using the email
  const existingUser = await User.findOne({ email: email })
  // if user exists give error message
  if (existingUser) {
   return res.status(403).json({ msg: "User already exists", existingUser })
  }
  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)

  const newUser = await User.create({
   firstname,
   lastname,
   email,
   password: passwordHash,
   picturePath,
   location,
   number,
   cart
  })
  // const savedUser = await newUser.save()
  res.status(201).json({ msg: "You have been registered", newUser })

 } catch (err) {
  res.status(500).json({ error: err.message })
 }
}


export const loginUser = async (req, res) => {
 try {
  const { email, password } = req.body
  // Checking if the user exists
  const user = await User.findOne({ email: email })
  if (!user) return res.status(400).json({ msg: "User does not exist" })
  // then check user password for match
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" })
  // JWT SIGNING
  const token = jwt.sign({ id: user._id, type: "user" }, process.env.JWT_SECRET)
  delete user.password
  res.status(200).json({ token, user })

 } catch (err) {
  res.status(500).json({ error: err.message })
 }
}