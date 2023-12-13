import express from "express";
import { getCar } from "../controllers/car.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

router.get("/:id", verifyToken, getCar)


export default router