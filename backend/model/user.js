
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},

    subjectInterest: {type: [String]},
});


export const Student = mongoose.model('Student', userSchema);
export const Tutor = mongoose.model('Tutor', userSchema);