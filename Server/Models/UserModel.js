import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    degree: String,
    institution: String,
    years: String
});

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    mobile: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Non-Binary']
    },
    address: {
        type: String,
        required: true
    },
    education: [educationSchema],
    aadhar: {
        type: String,
        required: true,

    },
    mobileVerified: {
        type: Boolean,
        default: false
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    aadharVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;