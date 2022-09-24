import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "the title is required"],
        unique: true,
        trim: true,
        maxlength: [40, "the title must be at least 40 characters"]
    },
    description: {
        type: String,
        required:[true, "the description is required"],
        trim: true,
        maxlength: [200, "the description must be at 200 characters"]
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.Task || mongoose.model("Task", taskSchema);