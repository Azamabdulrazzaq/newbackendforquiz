const express = require("express");
const router = express.Router();

const {
    addCategoryName,
    getCategoryNameHandler
} = require("../controler/category")

router.post("/add/category", addCategoryName);
router.get("/get-All/category", getCategoryNameHandler)

module.exports = router