
import express from "express";
import "dotenv/config";
import connectDB from "./config/db.config.js";


const app = express();


connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
