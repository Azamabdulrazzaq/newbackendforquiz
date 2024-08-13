const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
    {
        user_Id: { type: String, require: true },
        your_Score: { type: String, require: true },
        status: { type: String, require: true },
        percentage: { type: String, require: true },
        isQuizCompleted: { type: Boolean, require: true },
        playCount: { type: String, require: true },
        time_Spent: { type: Date, default: Date.now }
    },
    {
        collection: "progress_detail"
    }
)

const ProgressModal = mongoose.model("progress_detail", progressSchema);

module.exports = ProgressModal