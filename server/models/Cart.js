import mongoose from "mongoose"

const CartSchema = new mongoose.Schema(
 {
  userId: {
   type: String,
   required: true,
  },
  orders: {
   type: Array,
   default: []
  }
 },
 { timestamps: true }
)

const Cart = mongoose.model('Cart', CartSchema)
// export default Cart

const OrderSchema = new mongoose.Schema(
 {
  userId: {
   type: String,
   required: true,
  },
  carId: {
   type: String,
   required: true,
  },
  totalPrice: {
   type: String,
   required: true,
  },
  quantity: {
   type: String,
   required: true,
  },
  address: {
   type: String,
   required: true,
  }
 },
 { timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema)

export default { Order, Cart }