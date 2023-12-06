import express from "express";
import { loginSeller } from "../controllers/authSeller.js";
import { loginUser } from "../controllers/authUser.js";

const router = express.Router()

router.post('/loginseller', loginSeller)
router.post('/loginuser', loginUser)

export default router