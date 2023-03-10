import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export default mongoose.model('Intern', new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        mobile: { type: String, required: true, unique: true, },
        collegeId: { type: ObjectId, required: true },
        isDeleted: { type: Boolean, default: false }
    },
    { timestamps: true }
));