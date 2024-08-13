const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
    {
        quiz_Id: { type: String, require: true },
        quizTopic: { type: String, require: true },
        quiz_time: { type: String, require: true },
        quiz_TotalScore: { type: String, require: true },
        Number_ofQuestion: { type: String, require: true },
        passing_Marks: { type: String, require: true },
        quiz_Questions: [
            {
                question: { type: String, require: true },
                answer: [String, String, String, String],
                correct_Answer: { type: String, require: true }
            }
        ]

    },
    {
        collection: "quiz-allquestion"
    }
)


const QuizModal = mongoose.model("quiz-allquestion", quizSchema);

module.exports = QuizModal



// const questionSchema = new mongoose.Schema(
//     {
//         question: { type: String, require: true },
//         answer: [String, String, String, String],
//         correct_Answer: { type: String, require: true }
//     }
// )