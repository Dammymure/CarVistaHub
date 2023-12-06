import mongoose from "mongoose";

const CarSchema = mongoose.Schema(
 {
  sellerId:{
   type: String,
   require:true,
  },
  make:{
   type: String,
   require:true,
  },
  model:{
   type: String,
   require:true,
  },
  year:{
   type: String,
   require:true,
  },
  price:{
   type: String,
   require:true,
  },
  description:{
   type: String,
   require:true,
  },
  description:{
   type: String,
   require:true,
  },
  picturePaths:{
   type: Array,
   default:[],
   require:true,
  }
 }, { timestamps: true }
)

const Car = mongoose.model('Car', CarSchema)

export default Car