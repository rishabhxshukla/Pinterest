const express = require("express");
const router = express.Router();


/* ERROR PAGE */
router.get("*", (req, res) => {
    res.render("error.ejs");
});


module.exports = router;