require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// The dependencies needed to make file uploads work
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3002;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts);

// implementing file upload program --start
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}))
app.use(flash());
app.use(fileUpload());

// implementing file upload program --end



app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
