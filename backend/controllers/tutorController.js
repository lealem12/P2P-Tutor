
import {Tutor} from "../model/tutorModel.js";
import { signUpPersistence } from "../persistence/tutorPersistence.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    try {
        const existingTutor = await Tutor.findOne({email: req.body.email});
        if (existingTutor) return res.status(400).json({message: "Account already exists"});

        const newTutor = await signUpPersistence(req.body);
        const token = jwt.sign({id: newTutor._id, role: "tutor"}, process.env.JWT_SECRET_KEY, {expiresIn: "15m"});
        res.cookie("token", token);
        const {password, ...safeUserData} = newTutor._doc;
        res.status(201).json({message: "Account created successfully", data: safeUserData});
    } catch (error) {
        res.status(500).json({message:"server error"});
    }
}

export const login = async (req, res) => {
    try {
        const existingTutor = await Tutor.findOne({email: req.body.email});
        if (!existingTutor) return res.status(404).json({message: "Invalid email or password"});
        const isMatch = bcrypt.compare(existingTutor.password, req.body.password);
        if (!isMatch) res.status(400).json({message: "Invalid email or password"});

        const token = jwt.sign({id: existingTutor._id, role: "tutor"}, process.env.JWT_SECRET_KEY, {expiresIn: "15m"});
        res.cookie("token", token);
        const {password, ...safeUserData} = existingTutor._doc;
        res.status(201).json({message: "Login successful", data: safeUserData});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}






