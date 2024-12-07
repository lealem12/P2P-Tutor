

import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    subjectExpertise: {type: [String], required: true},

    bio: {type: String}
}, {timestamps: true});


export const Tutor = mongoose.model('Tutor', tutorSchema);
