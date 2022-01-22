const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const port = process.env.PORT || 8080;

dotenv.config();
const app = express();

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, console.log(`runnin on port ${port}`));
