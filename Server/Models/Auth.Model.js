import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    aiCredits:{
        type: Number,
        default: 150,
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;