import Seller from "../models/Seller.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const sellerRegister = async (req, res) => {
 try {
  const {
   firstname,
   lastname,
   email,
   password,
   picturePath,
   location,
   number,
   cars
  } = req.body

  // check if a user already exists using the email
  const existingSeller = await Seller.findOne({ email: email })
  // if user exists give error message
  if (existingSeller) {
   return res.status(403).json({ msg: "Seller already exists", existingSeller })
  } else {

   const salt = await bcrypt.genSalt()
   const passwordHash = await bcrypt.hash(password, salt)

   const newSeller = await Seller.create({
    firstname,
    lastname,
    email,
    password: passwordHash,
    picturePath,
    location,
    number,
    cars
   })
   // const savedUser = await newUser.save()
   res.status(201).json({ msg: "You have been registered", newSeller })
  }
 } catch (err) {
  res.status(500).json({ error: err.message })
 }
}

export const loginSeller = async (req, res) =>{
 try {
  const {email, password} = req.body
  // Checking if the user exists
  const seller = await Seller.findOne({ email: email})
  if(!seller) return res.status(400).json({msg:"Seller does not exist"})
  // then check user password for match
  const isMatch = await bcrypt.compare(password, seller.password)
  if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"})
  // JWT SIGNING
  const token = jwt.sign({ id: seller._id, type:"seller"}, process.env.JWT_SECRET)
  delete seller.password
  res.status(200).json({token, seller})

 } catch (err) {
  res.status(500).json({ error: err.message })
 }
}

