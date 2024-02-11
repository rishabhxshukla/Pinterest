const express = require("express");
const router = express.Router();

//Users collection
const users = require("../database/models/users");


/* LOG IN USER */
router.post("/", async (req, res) => {

    try {
        //Checking if email & password is present in database
        const doc = await users.findOne({
            email: req.body.email,
            password: req.body.password
        });

        //If doc exists, log in
        if (doc) {
            //Extracting name
            const fullname = doc.name;
            const username = fullname.split(" ")[0].toLowerCase();

            //Creating cookies
            res.cookie("fullname", fullname);
            res.cookie("username", username);

            //Redirecting to Home page
            res.redirect("/home");
        }
        else {
            //Rendering Error page
            res.render("error.ejs");
        }
    }

    catch (err) {
        res.send(err);
    }
});


module.exports = router;