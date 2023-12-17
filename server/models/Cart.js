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

export default Cart