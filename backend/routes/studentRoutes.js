
import express from "express";
import { signUp, login } from "../controllers/studentController.js";


const studentRouter = express.Router();

studentRouter.post("/sign-up", signUp);
studentRouter.post("/login", login);



export default studentRouter;
