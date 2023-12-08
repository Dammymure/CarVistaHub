import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { allSellers, getSeller, updateSeller } from "../controllers/seller.js"
// import router from "./auth"

const router = express.Router()

// READ
router.get("/", verifyToken, allSellers)
router.get("/:id", verifyToken, getSeller)
// router.put("/update/:id", verifyToken, updateSeller)


export default router