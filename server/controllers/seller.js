import Seller from '../models/Seller.js'

// READ
export const getSeller = async (req, res) => {
 try {
  const { id } = req.params
  const seller = await Seller.findById(id)
  res.status(200).json(seller)
 } catch (error) {
  res.status(404).json({ message: error.message })
 }
}

export const allSellers = async (req, res) =>{
 try {
  const sellers = await Seller.find()
  res.status(200).json(sellers)
 } catch (error) {
  res.status(404).json({ message: err.message })
 }
}