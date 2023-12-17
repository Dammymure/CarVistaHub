import User from "../models/User.js";
import Car from "../models/Car.js"
import Order from "../models/Order.js"

// UPDATE
export const updateUser = async (req, res) => {
 try {
  const { id } = req.params
  const editUser = await User.findOneAndUpdate({ _id: id }, req.body)
  res.status(200).json({ msg: "Record Successfully Updated", editUser })
 } catch (error) {
  res.status(404).json({ message: error.message })
 }
}

// order
export const createUserOrder = async (req, res) => {
 try {
  const { userId, carId } = req.params

  const {
   totalPrice,
   quantity,
   address,
  } = req.body

  const user = await User.findById(userId);
  const car = await Car.findById(carId);

  const newOrder = await Order.create({
   userId: userId,
   carId: carId,
   totalPrice,
   quantity,
   address,
   carPicturePaths: car.picturePaths,
   sellerName: car.sellerName,
   sellerId: car.sellerId
  })
  await newOrder.save();
  res.status(201).json({ msg: "Your Order is Successful", newOrder })
 } catch (error) {
  res.status(404).json({ message: error.message })
 }
}

export const getUserOrders = async (req, res) => {
 try {
  const { userId } = req.params
  const order = await Order.find({ userId })
  res.status(200).json(order)
 } catch (error) {
  res.status(404).json({ message: error.message })
 }

}