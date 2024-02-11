const express = require("express");
const router = express.Router();


/* UPLOAD PAGE */
router.get("/upload", (req, res) => {

    res.render("upload.ejs");
});


module.exports = router;