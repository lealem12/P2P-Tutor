
import express from "express";
import "dotenv/config";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import tutorRouter from "./routes/tutorRoutes.js";
import studentRouter from "./routes/studentRoutes.js";


const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/tutor", tutorRouter);
app.use("/student", studentRouter);

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running at: http://localhost:${process.env.PORT}`);
});
