
import bcrypt from "bcrypt";
import { Student } from "../model/studentModel.js";

export const signUpPersistence = async (studentDetails) => {
    const {firstname, lastname, email, password} = studentDetails;
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return await Student.create({firstname, lastname, email, password: hashedPassword});
}

