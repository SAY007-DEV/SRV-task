import mongoose from 'mongoose';

export const connectDB = async ()=>{

    try {
        await mongoose.connect('mongodb://localhost:27017/Task');
        console.log("MongoDB connectced");
        
        
    } catch (error) {
        console.log('failed to connect MongoDB',error);
        
        
    }
};

// export default connectDB;