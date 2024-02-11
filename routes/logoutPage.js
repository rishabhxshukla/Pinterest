const express = require("express");
const router = express.Router();


/* LOGOUT USER */
router.get("/logout", (req, res) => {

    //Clearing cookies
    res.clearCookie("fullname");
    res.clearCookie("username");

    //Sending to login page
    res.redirect("/");
});


module.exports = router;