import Seller from "../models/Seller.js"
import Car from "../models/Car.js"

// Create a Car
export const createCar = async (req, res) =>{
 try{
  const { sellerId, make, model, year, price,color, mileage, description, picturePaths } = req.body

  const seller = await Seller.findById(sellerId)
  if(!seller){
   res.status(404).json({ message:"Seller not found"})
  }
  // const sellerIs = seller.firstname + " " + seller.lastname
  const newCar = await Car.create({
   sellerId,
   sellerName: seller.firstname + " " + seller.lastname ,
   sellerLocation : seller.location,
   make,
   model,
   year,
   color,
   mileage,
   price,
   description,
   available,
   picturePaths
  })
  // Automatically add the newly created car to the seller's cars array
  seller.cars.push(newCar._id); 
  await seller.save();
  res.status(201).json({ msg: "Your car has been registered", newCar })
 }catch{
  res.status(500).json({ error: err.message, msg:"An error at car creation" })
 }
}

// UPDATE
export const updateCar = async (req, res) => {
 try {
  const { id } = req.params
  const editCar = await Car.findOneAndUpdate({ _id: id }, req.body)
  res.status(200).json({ msg: "Car Record Successfully Updated", editCar })
 } catch (error) {
  res.status(404).json({ message: error.message })
 }
}

// Get Car
export const getCar = async (req, res) => {
 try {
  const { id } = req.params
  const user = await Car.findById(id)
  res.status(200).json(user)
 } catch (err) {
  res.status(404).json({ message: err.message })
 }
}