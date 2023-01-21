import mongoose from 'mongoose';

export default mongoose.model('College', new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true, trim: true },
        fullName: { type: String, required: true, trim: true },
        logoLink: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
)); 
