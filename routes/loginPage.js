const express = require("express");
const router = express.Router();


/* LOGIN PAGE */
router.get("/", (req, res) => {

    res.render("login.ejs");
});


module.exports = router;