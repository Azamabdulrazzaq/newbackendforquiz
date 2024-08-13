
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category_Name: { type: String, require: true }
    },
    {
        collection: "categories-name"
    }
)

const CategoryModal = mongoose.model("categories-name", categorySchema)
module.exports = CategoryModal;