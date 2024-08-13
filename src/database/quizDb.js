
const mongoose = require("mongoose");
const dbName = "Reactquizapp";
const dbUrl = "mongodb+srv://azam-project1:azam12345@back-end-development.qy3ydsz.mongodb.net/?retryWrites=true&w=majority&appName=Back-End-Development"

const quizDB = async () => {
    try {
        const isconected = await mongoose.connect(
            dbUrl,
            { dbName: dbName },

        )
        isconected && console.log("Mongo DB Conected succesfully")
    }

    catch (error) {
        console.log(`Somethin went wrong while fetching Data from db ${error}`)
    }
}

module.exports = quizDB