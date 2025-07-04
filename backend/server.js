import express from "express";
import dotenv from "dotenv";
import authRoutes from "../backend/routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // allows you to parse the body of request
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    connectDB();
    
});