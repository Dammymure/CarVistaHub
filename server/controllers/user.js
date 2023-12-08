import User from "../models/User.js";

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