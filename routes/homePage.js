const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");


/* HOME PAGE */
router.get("/home", (req, res) => {

    //Reading cookies
    const fullname = req.cookies.fullname;
    const username = req.cookies.username;

    //Directory where images are stored
    const imagesDirectory = path.join(__dirname, "../uploads");

    //Reading files from the uploads folder
    fs.readdir(imagesDirectory, (err, files) => {
        if (!err) {

            //Filter out only image files
            const imageFiles = files.filter(file => {
                const extension = path.extname(file).toLowerCase();
                return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension);
            });


            //Getting filenames with extension
            const filenames = imageFiles.map(file => file);


            const props = {
                name: fullname,
                username: username,
                images: filenames
            };

            //Rendering Home page
            res.render("home.ejs", props);
        }

        else {
            res.send(err);
        }
    });
});


module.exports = router;