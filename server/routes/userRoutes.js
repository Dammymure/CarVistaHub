import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { addOrderToCart, createUserOrder, getUserOrders, orderComplete } from "../controllers/user.js"


const router = express.Router()


router.post('/order/:userId/:carId', verifyToken, createUserOrder)
router.get('/:userId/orders', verifyToken, getUserOrders)
router.patch('/completedtransaction/:orderId', verifyToken, orderComplete)
router.patch('/:userId/:orderId', verifyToken, addOrderToCart)


export default router