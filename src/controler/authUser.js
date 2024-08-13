
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe"
const jwt = require("jsonwebtoken")
const AuthUser = require("../Modals/userModal");


const userRegisterHandller = async (req, res) => {

    const { name, email, password, contactNum, gender, role } = req.body;

    const createAt = Date.now();
    const visitedHistory = []
    console.log(req.body)

    if (!name || !email || !password || !contactNum || !gender || !role || !createAt || !visitedHistory) {
        return res.status(400).send({
            status: false,
            message: "All feils required"
        })
    }

    const checkEmail = await AuthUser.findOne({ email: email });

    if (checkEmail) {
        return res.status(401).send({
            status: false,
            message: "User is Already Exist"
        })
    }

    try {
        const encodePassword = btoa(password);
        console.log(encodePassword);

        //200;
        const newUser = await AuthUser.create({
            name,
            email,
            password: encodePassword,
            contactNum,
            gender,
            role,
            createAt,
            visitedHistory
        })
        return res.status(200).send({
            status: true,
            message: "User Registered Successfully",
            data: newUser
        })

    }

    catch (error) {
        console.log(`Something went wrong While save user in Db: ${error}`)
    }
    //500
    return res.status(500).send({
        status: false,
        message: "Something went wrong While save user in Db"
    })
}

const getAllUsersHandler = async (req, res) => {

    try {
        //200
        const getAllUsers = await AuthUser.find();

        return res.status(200).send({
            status: false,
            message: "Get All Users Succesfully",
            data: getAllUsers
        })

    }

    catch (error) {
        console.log(`Somthing Went wrong while fetchin data from DataBase :${error}`);

    }

}

const userLoginHandler = async (req, res) => {
    const { email, password } = req.body;

    // 400
    if (!email || !password) {
        return res.status(400).send({
            status: false,
            message: "Email and password Required"
        })
    }
    //401
    const isUserExist = await AuthUser.findOne({ email: email });

    if (!isUserExist) {
        return res.status(401).send({
            status: false,
            message: "user Already Exist"
        })
    }

    //402;

    const decodePassword = atob(isUserExist.password);
    console.log(decodePassword)

    if (decodePassword !== password) {
        return res.status(402).send({
            status: false,
            message: "Incorrect Password"
        })
    }

    try {
        //200
        const currentTime = Date.now();

        const visited = await AuthUser.findOneAndUpdate(
            { _id: isUserExist.id },
            { $push: { visitedHistory: currentTime.toString() } },
            { returnDocument: "after" }
        )

        const token = jwt.sign({ email: isUserExist.email }, JWT_SECRET);

        return res.status(200).send({
            status: false,
            message: "User Logged in Sucessfully",
            usertoken: token,
            data: visited

        })
    }


    catch (error) {
        console.log(`Something went wrong while fetching login user : ${error}`);
    }
    //500;
    return res.status(500).send({
        status: false,
        message: "Something went wrong while fetching login user from DB"
    })


}

const userVarifyHandler = async (req, res) => {

    const { token } = req.body
    // 400;
    if (!token) {
        return res.status(400).send({
            status: false,
            message: "Token is required"
        })
    }
    //401
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const userEmail = user.email

        if (!userEmail) {
            return res.status(401).send({
                status: false,
                message: "user Token has no contain email"
            })
        }

        //200;

        const userData = await AuthUser.findOne({ email: userEmail });
        return res.status(200).send({
            status: false,
            message: "Email Varify Sucessfully",
            data: userData
        })
    }


    catch (error) {
        //402
        if (error.name == "jsonwebtoken") {
            return res.status(402).send({
                status: false,
                message: "Data Fetch Error"
            })

        }
        //500
        return res.status(500).send({
            status: false,
            message: "Somthing went wrong while varifying Email"
        })
    }

}

module.exports = {
    userRegisterHandller,
    getAllUsersHandler,
    userLoginHandler,
    userVarifyHandler
}