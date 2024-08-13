
const QuizModal = require("../Modals/quizQuestionModal");

const quizQuestionHandler = async (req, res) => {
    const {
        quiz_Id,
        quizTopic,
        quiz_time,
        quiz_TotalScore,
        Number_ofQuestion,
        passing_Marks,
        quiz_Questions: [{ question, answer, correct_Answer, }],
    } = req.body

    if (!quiz_Id || !quizTopic || !quiz_time || quiz_TotalScore || !Number_ofQuestion || !passing_Marks || !quiz_Questions || !question || !answer || !correct_Answer) {

        return res.status(400).send({
            status: false,
            message: "all Feild are required",
        })
    }
    //200;
    try {
        const checkQuizQuestion = await QuizModal.create({
            quiz_Id,
            quizTopic,
            quiz_time,
            quiz_TotalScore,
            Number_ofQuestion,
            passing_Marks,
            quiz_Questions,
        })

        if (checkQuizQuestion) {
            return res.status(200).send({
                status: true,
                message: 'Question Added Successfully',
                data: checkQuizQuestion
            })
        }
    }

    catch (error) {
        console.log(`Something went wrong while fetching sending question Data: ${error}`);

    }
}

const getAllQuizQuestionHandler = async (req, res) => {
    try {
        const getAllQuestion = await QuizModal.find();
        if (getAllQuestion) {
            return res.status(200).send({
                status: true,
                message: "get All Questions"
            })
        }
    }

    catch (error) {
        console.log(`Something went wrong while fetching All  question Data : ${error}`);

    }
}

const quizQuestionIdHandler = async (req, res) => {
    const { quiz_Id } = req.body;
    try {
        //400;
        const quizId = await QuizModal.findOne({ quiz_Id });
        if (!quizId) {
            return res.status(400).send({
                status: false,
                message: "quiz not Found",
            })
        }
        //200;
        const resultId = await QuizModal.find({ quiz_Id })
        return res.status(200).send({
            status: true,
            message: "quiz found Succesfully",
            data: resultId
        })

    }

    catch (error) {
        console.log(`Somethin went wrong while quiz id found: ${error}`)
    }
}

module.exports = {
    quizQuestionHandler,
    getAllQuizQuestionHandler,
    quizQuestionIdHandler,
}