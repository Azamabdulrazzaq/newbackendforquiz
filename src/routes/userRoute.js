const express = require("express");
const router = express.Router();
const { getAllUsersHandler,
    userVarifyHandler,
    userRegisterHandller,
    userLoginHandler
} = require("../controler/authUser");


router.post("/signup", userRegisterHandller);
router.post("/login", userLoginHandler)
router.post("/user/varify", userVarifyHandler);
router.get("/getall/users", getAllUsersHandler)


module.exports = router;