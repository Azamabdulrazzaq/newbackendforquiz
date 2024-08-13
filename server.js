const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const quizDB = require("./src/database/quizDb");
const authRouter = require("./src/routes/userRoute")
const categoryRouter = require("./src/routes/categoryRoute");
const questionRouter = require("./src/routes/questionRoute");
const progressRouter = require("./src/routes/progressRoute")
// Static Variables;
const app = express();
const port = 8080;

// Express Middle wares;
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// Database;
quizDB()

//All Screens Route;
app.use("/quiz", authRouter)
app.use("/quiz", categoryRouter)
app.use("/quiz", questionRouter)
app.use("/quiz", progressRouter)



console.log("its working");




// server Run;
app.listen(
    port,
    () => {
        console.log(`Server is running on http://localhost:${port}`);
    }
)
