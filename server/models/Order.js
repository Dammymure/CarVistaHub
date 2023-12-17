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
   type: String,
   required: true,
  },
  address: {
   type: String,
   required: true,
  },
  carPicturePaths: {
   type: String,
   required: true,
  },
  sellerName: {
   type: String,
   required: true,
  },
  sellerId: {
   type: String,
   required: true,
  }
 },
 { timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema)

export default Order