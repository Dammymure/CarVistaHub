import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { verifyToken } from "./middleware/auth.js";
import { userRegister } from "./controllers/authUser.js";
import { sellerRegister } from "./controllers/authSeller.js";
import authRoutes from "./routes/auth.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js";

import { fileURLToPath } from "url";
import { updateSeller } from "./controllers/seller.js";
import { updateUser } from "./controllers/user.js";
import { createCar, updateCar } from "./controllers/car.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, "public/assets");
 },
 filename: function (req, file, cb) {
  cb(null, file.originalname);
 },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/registeruser", upload.single("picture"), userRegister);
app.post("/auth/registerseller", upload.single("picture"), sellerRegister);
app.put("/seller/update/:id", upload.single("picture"), updateSeller )
app.put("/user/update/:id", upload.single("picture"), updateUser )

app.post("/car", verifyToken, upload.array("pictures"), createCar);
app.post("/car/update/:id", verifyToken, upload.array("pictures"), updateCar);

// ROUTES
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/seller", sellerRoutes)
app.use("/car", carRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
 .connect(process.env.MONGO_URL)
 .then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

 })
 .catch((error) => console.log(`${error} did not connect`));