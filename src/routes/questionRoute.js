
const express = require("express");
const router = express.Router();

const { quizQuestionHandler,
    getAllQuizQuestionHandler,
    quizQuestionIdHandler
} = require("../controler/quizquestions")

router.post("/add-new/question", quizQuestionHandler)
router.get("/get-all/question", getAllQuizQuestionHandler)
router.post("/category/id", quizQuestionIdHandler);

module.exports = router;