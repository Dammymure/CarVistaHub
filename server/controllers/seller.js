import Seller from '../models/Seller.js'
import Car from '../models/Car.js'


// READ

// GET ONE SELLER
export const getSeller = async (req, res) => {
 try {
  const { id } = req.params
  const seller = await Seller.findById(id)
  res.status(200).json(seller)
 } catch (error) {
  res.status(404).json({ message: error.message })
 }
}

// GET ALL SELLERS
export const allSellers = async (req, res) => {
 try {
  const sellers = await Seller.find()
  res.status(200).json(sellers)
 } catch (error) {
  res.status(404).json({ message: err.message })
 }
}

// Update
// UPDATE SELLER INFO
export const updateSeller = async (req, res) => {
 try {
  const { id } = req.params
  const editSeller = await Seller.findOneAndUpdate({ _id: id }, req.body)
  res.status(200).json({ msg: "Record Successfully Updated", editSeller })
 } catch (err) {
  res.status(404).json({ message: err.message })
 }
}

// GET ALL CARS BY A SELLER
export const getSellerCars = async (req, res) => {
 try {
  const { id } = req.params
  const seller = await Seller.findById(id)

  const cars = await Promise.all(seller.cars.map((id) => Car.findById(id)))

  const formattedCars = cars.map(({_id,sellerId, sellerName, sellerLocation,
make, model, year, color, mileage, price, description, available, picturePaths
  }) => {
   return {
    _id, sellerId, sellerName, sellerLocation,
    make, model, year, color, mileage, price, description, available, picturePaths
   }
  })
  res.status(200).json(formattedCars)
 } catch (error) {
  res.status(404).json({ message: error.message })
 }

}