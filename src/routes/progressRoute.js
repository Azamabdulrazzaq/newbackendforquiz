const express = require("express");

const router = express.Router();

const { progressDetailHandller } = require("../controler/quizProgress");

router.post("/progress/details", progressDetailHandller)

module.exports = router;