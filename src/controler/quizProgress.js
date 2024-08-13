const ProgressModal = require("../Modals/quizProgressModal");
const AuthUser = require("../Modals/userModal")


const progressDetailHandller = async (req, res) => {

    const { user_Id, your_Score, status, percentage, isQuizCompleted, playCount, } = req.body;
    const time_Spent = Date.now();

    //400;
    if (!user_Id || !your_Score || !status || !percentage || !isQuizCompleted || !playCount || !time_Spent) {
        return res.status(400).send({
            status: false,
            message: "All feild are required"
        })
    }

    //401;
    const isValidId = await AuthUser.findOne({ _id: user_Id })

    if (!isValidId) {
        return res.status(401).send({
            status: false,
            message: "Invalid User Id"
        })
    }
    //200;
    try {
        const progress_detail = await ProgressModal.create({
            user_Id,
            your_Score,
            status, percentage,
            isQuizCompleted,
            playCount,
            time_Spent
        })
        if (progress_detail) {
            return res.status(200).send({
                status: true,
                message: "Progress detail updated Succesfully",
                data: progress_detail
            })
        }
    }

    catch (error) {
        console.log(`Something went wrong while progressDetail from node js ${error}`)
    }


};

module.exports = {
    progressDetailHandller
};