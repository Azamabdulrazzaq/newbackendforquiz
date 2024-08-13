
const CategoryModal = require("../Modals/quizCategoryModal")

const addCategoryName = async (req, res) => {

    const { category_Name } = req.body

    if (!category_Name) {
        return res.status(400).send({
            status: false,
            message: "Feild Are required"
        })
    }

    const isCheckCategory = await CategoryModal.findOne({ category_Name })
    if (isCheckCategory) {
        return res.status(401).send({
            status: false,
            message: "Category is already exist"
        })
    }
    try {

        const getCategory = await CategoryModal.create({
            category_Name,
        })
        if (getCategory) {
            return res.status(200).send({
                status: true,
                message: "Add Category name Successfully",
                data: getCategory
            })
        }
    }

    catch (error) {
        console.log(`Somthing went wrong while add category name : ${error}`);

    }
}

const getCategoryNameHandler = async (req, res) => {
    try {

        const getCategory = await CategoryModal.find();
        if (getCategory) {
            return res.status(200).send({
                status: false,
                message: "get Category Successfully"
            })
        }

    }

    catch (error) {
        console.log(`Somthing went wrong while get category name : ${error}`);

    }
}

module.exports = {
    addCategoryName,
    getCategoryNameHandler
}