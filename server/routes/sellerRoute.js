import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { allSellers, getSeller } from "../controllers/seller.js"
// import router from "./auth"

const router = express.Router()

// READ
router.get("/", verifyToken, allSellers)
router.get("/:id", verifyToken, getSeller)

export default router