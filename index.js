import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import hotelRouter from "./routes/hotelRouter.js";
import userRouter from "./routes/userRoute.js";
import roomRouter from "./routes/roomRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8800

// Initial Connection to DB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected")
    } catch (error) {
        handleError(error);
    }
}

// Connect automatically after any issues
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected")
})

// Creating Middleware for different routes
app.use(cors())
app.use(cookieParser())
app.use(express.json()) //to accept data in json format
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/users", userRouter);
app.use("/api/rooms", roomRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(PORT, () => {
    connect();
    console.log("Connected to Backend.")
})