import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    dob: { type: Date },
    mobile: { type: Number },
    email: { type: String },
    aadhar: { type: Number },
    address: { type: String },
    state: { type: String },
    district: { type: String },
    pincode: { type: Number },
    guardianName: { type: String },
    guardianNumber: { type: Number },
    gender: { type: String },
});

module.exports = mongoose.model('Users',userschema);