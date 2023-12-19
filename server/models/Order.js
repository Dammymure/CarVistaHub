import mongoose from "mongoose"

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
   type: Number,
   required: true,
  },
  address: {
   type: String,
   required: true,
  },
  carPicturePaths: {
   type: Array,
   required: true,
  },
  sellerName: {
   type: String,
   required: true,
  },
  sellerId: {
   type: String,
   required: true,
  },
  completed:{
   type: Boolean,
   default: true,
   require: false,
  }
 },
 { timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema)

export default Order