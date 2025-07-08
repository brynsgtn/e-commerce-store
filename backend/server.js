import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "../backend/routes/auth.route.js";
import productRoutes from "../backend/routes/product.route.js";
import cartRoutes from "../backend/routes/cart.route.js";
import couponRoutes from "../backend/routes/coupon.route.js";
import paymentRoutes from "../backend/routes/payment.route.js";


import { connectDB } from "./lib/db.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // allows you to parse the body of request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    connectDB();
    
});