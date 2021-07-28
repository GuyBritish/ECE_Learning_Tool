if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const flash = require("connect-flash");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

app.use(flash());

//=================================================================================================

const toolRoutes = require("./routes/tools");

app.get("/", (req, res) => {
	res.render("general/home");
});

app.use("/tools", toolRoutes);

app.all("*", (req, res, next) => {
	next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
	if (!err.statusCode) {
		err.statusCode = 500;
	}
	if (!err.message) {
		err.message = "Something went wrong!";
	}
	res.status(err.statusCode).render("general/error", { err });
});

//=================================================================================================

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
	console.log(`ECE Buddy is online on port ${Port}`);
});
