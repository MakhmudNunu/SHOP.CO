const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true, trim: true },
        rate: { type: Number, required: true, min: 1, max: 5, default: 5 },
        text: { type: String, required: true, trim: true },
        verified: { type: Boolean, default: false },
    },
    { timestamps: true }
)

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;