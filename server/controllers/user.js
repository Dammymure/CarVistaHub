import User from "../models/User.js";
import Car from "../models/Car.js"
import Order from "../models/Order.js"
import Cart from "../models/Cart.js"

// UPDATE
export const updateUser = async (req, res) => {
 try {
  const { userId } = req.params
  const editUser = await User.findOneAndUpdate({ _id: userId }, req.body)
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
   quantity,
   address,
  } = req.body

  const user = await User.findById(userId);
  const car = await Car.findById(carId);

  const newOrder = await Order.create({
   userId: userId,
   carId: carId,
   totalPrice: (car.price * quantity),
   quantity,
   address,
   carPicturePaths: car.picturePaths,
   sellerName: car.sellerName,
   sellerId: car.sellerId,
   completed: false,
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


export const orderComplete = async (req, res) => {
 try {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);

  // Toggle the 'completed' property
  order.completed = !order.completed;

  // Save the updated order
  await order.save();

  res.status(200).json({ message: 'Order status updated successfully', order });
 } catch (error) {
  res.status(404).json({ message: error.message });
 }
};



export const addOrderToCart = async (req, res) => {
 try {
  const { userId, orderId } = req.params;

  const order = await Order.findById(orderId);

  if (userId != order.userId) {
   return res.status(404).json({ message: "User cannot add to Cart" });
  }

  if (order.completed === false) {
   return res.status(404).json({ message: "Order is not completed, complete your order" });
  }

  let cart = await Cart.findOne({ userId });

  if (!cart) {
   cart = new Cart({
    userId,
    orders: [order],
   });
  } else {
   cart.orders.push(order);
  }

  await cart.save();

  res.status(200).json(cart);
 } catch (error) {
  res.status(404).json({ message: error.message });
 }
};



