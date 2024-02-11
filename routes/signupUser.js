const express = require("express");
const router = express.Router();

//Users collection
const users = require("../database/models/users");


/* SIGN UP USER */
router.post("/register", async (req, res) => {
    try {
        //Validation
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.send("<h1>Fields cannot be empty!</h1>");
        }

        //Creating new user
        await users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        //Displaying home page
        res.redirect("/");
    }

    catch (err) {
        res.send(err);
    }
});


module.exports = router;