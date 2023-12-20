import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { allSellers, carAvailable, getSeller, getSellerCars, updateSeller } from "../controllers/seller.js"
// import router from "./auth"

const router = express.Router()

// READ
router.get("/", verifyToken, allSellers)
router.get("/:id", verifyToken, getSeller)

// UPDATE
router.put("/update/:sellerId", verifyToken, updateSeller)
router.patch("/caravailable/:sellerId/:carId", verifyToken, carAvailable)
router.get("/:sellerId/cars", verifyToken, getSellerCars)


export default router