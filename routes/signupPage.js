const express = require("express");
const router = express.Router();


/* SIGNUP PAGE */
router.get("/register", (req, res) => {

    res.render("signup.ejs");
});


module.exports = router;