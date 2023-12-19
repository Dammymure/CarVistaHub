import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { allSellers, getSeller, getSellerCars, updateSeller } from "../controllers/seller.js"
// import router from "./auth"

const router = express.Router()

// READ
router.get("/", verifyToken, allSellers)
router.get("/:id", verifyToken, getSeller)

// UPDATE
router.put("/update/:sellerId", verifyToken, updateSeller)
router.get("/:sellerId/cars", verifyToken, getSellerCars)


export default router