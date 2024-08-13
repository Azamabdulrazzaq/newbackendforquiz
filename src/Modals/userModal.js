
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        contactNum: { type: String, require: true },
        gender: { type: String, require: true },
        role: { type: String, require: true },
        createAt: { type: Date, default: Date.now },
        visitedHistory: { type: [String], default: [] },
    },
    {
        collection: "auth-user"
    }
)

const AuthUser = mongoose.model("auth-user", userSchema);

module.exports = AuthUser;