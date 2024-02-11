const express = require("express");
const router = express.Router();
const multer = require("multer");


//Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Upload folder path
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        //Changing file name
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage });


/* UPLOAD IMAGE */
router.post("/upload", upload.single("uploadedImage"), (req, res) => {

    //Redirecting to Home page
    res.redirect("/home");
});


module.exports = router;