
import express from "express";
import { login, signUp } from "../controllers/tutorController.js";

const tutorRouter = express.Router();

tutorRouter.post("/sign-up", signUp);
tutorRouter.post("/login", login)


export default tutorRouter;
