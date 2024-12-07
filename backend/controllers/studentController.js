
import {Student} from "../model/studentModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { signUpPersistence } from "../persistence/studentPersistence.js";

export const signUp = async (req, res) => {
    try {
        const existingStudent = await Student.findOne({email: req.body.email});
        if (existingStudent) return res.status(400).json({message: "Account already exists"});

        const newStudent = await signUpPersistence(req.body);
        const token = jwt.sign({id: newStudent._id, role: "student"}, process.env.JWT_SECRET_KEY, {expiresIn: "15m"});
        res.cookie("token", token);
        const {password, ...safeUserData} = newStudent._doc;
        res.status(201).json({message: "Account created successfully", data: safeUserData});
    } catch (error) {
        console.error(`Error: ${error.message}`)
        res.status(500).json({message: "Internal server error"});
    }    
}


export const login = async (req, res) => {
    try {
        const existingStudent = await Student.findOne({email: req.body.email});
        if(!existingStudent) return res.status(400).json({message: "Invalid email or password"});
        const isMatch = bcrypt.compare(req.body.password, existingStudent.password);
        if (!isMatch) return res.status(400).json({message: "Invalid email or password"});

        const token = jwt.sign({id: existingStudent._id, role: "student"}, process.env.JWT_SECRET_KEY, {expiresIn: "15m"});
        res.cookie("token", token);
        const {password, ...safeUserData} = existingStudent._doc;
        res.status(201).json({message: "Login Successful", data: safeUserData});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}





