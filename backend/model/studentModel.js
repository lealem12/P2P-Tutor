
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

    subjectPreference: {type: [String]},
}, {timestamps: true});



export const Student = mongoose.model('Student', studentSchema);