const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


/* Importing pages and routes */
const connectToDB = require("./database/ConnectToDB");
const loginPage = require("./routes/loginPage");
const loginUser = require("./routes/loginUser");
const signupPage = require("./routes/signupPage");
const signupUser = require("./routes/signupUser");
const homePage = require("./routes/homePage");
const uploadPage = require("./routes/uploadPage");
const uploadImage = require("./routes/uploadImage");
const logoutPage = require("./routes/logoutPage");
const errorPage = require("./routes/errorPage");


/* Setting the view engine */
app.set("view engine", "ejs");


/* Serving static files from 'public' & 'uploads' directory */
app.use(express.static("public"));
app.use(express.static("uploads"));


/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/* Connecting to database */
connectToDB();


/* Routes */
app.use("/", loginPage);
app.use("/", loginUser);
app.use("/", signupPage);
app.use("/", signupUser);
app.use("/", homePage);
app.use("/", uploadPage);
app.use("/", uploadImage);
app.use("/", logoutPage);
app.use("/", errorPage);


/* Listening on port 3000 */
app.listen(3000, () => {
    console.log("Server started...");
});