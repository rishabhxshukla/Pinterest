const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Guest User"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);


const users = mongoose.model("users", userSchema);


module.exports = users;