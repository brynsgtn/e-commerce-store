import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from "../backend/routes/auth.route.js";
import productRoutes from "../backend/routes/product.route.js";
import cartRoutes from "../backend/routes/cart.route.js";
import couponRoutes from "../backend/routes/coupon.route.js";
import paymentRoutes from "../backend/routes/payment.route.js";
import analyticsRoutes from "../backend/routes/analytics.route.js";


import { connectDB } from "./lib/db.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve()

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
    // Serve static files from React build
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    // Handle specific React routes that need SPA routing
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/login", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/signup", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/cart", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/purchase-success", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/purchase-cancel", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/secret-dashboard", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.get("/category/:category", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
} else {
    // Development fallback
    app.get("/", (req, res) => {
        res.json({ message: "API is running in development mode" });
    });
}



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    connectDB();

});