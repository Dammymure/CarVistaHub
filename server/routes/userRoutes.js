import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { createUserOrder, getUserOrders } from "../controllers/user.js"


const router = express.Router()


router.post('/order/:userId/:carId', verifyToken, createUserOrder)
router.get('/:userId/orders', verifyToken, getUserOrders)


export default router