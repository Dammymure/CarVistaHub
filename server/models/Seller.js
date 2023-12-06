import mongoose from "mongoose"
const SellerSchema = new mongoose.Schema(
 {
  firstname: {
   type: 'String',
   required: true,
   min: 2,
   max: 50
  },
  lastname: {
   type: 'String',
   required: true,
   min: 2,
   max: 50
  },
  email: {
   type: 'String',
   required: true,
   max: 50,
   unique: true
  },
  password: {
   type: 'String',
   required: true,
   min: 50,
  },
  picturePath: {
   type: 'String',
   default: "",
  },
  cars: {
   type: Array,
   default: []
  },
  location: String,
  number: Number,
 },
 { timestamps: true }
)

const Seller = mongoose.model('Seller', SellerSchema)

export default Seller