import mongoose from "mongoose"
const UserSchema = new mongoose.Schema(
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
  cart: {
   type: 'Array',
   default: [],
   required: false,
  },
  location: String,
  number: Number,
 },
 { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

export default User