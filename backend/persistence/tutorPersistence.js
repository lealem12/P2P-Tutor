
import { Tutor } from "../model/tutorModel.js";
import bcrypt from "bcrypt";

export const signUpPersistence = async (tutorDetails) => {
    const {firstname, lastname, email, password, subjectExpertise} = tutorDetails;
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newTutor = new Tutor({firstname, lastname, email, password: hashedPassword, subjectExpertise});
    return await newTutor.save();
}

