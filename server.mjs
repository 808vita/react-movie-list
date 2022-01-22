import express from "express";

import axios from "axios";
import dotenv from "dotenv";
import path from "path";

const port = process.env.PORT || 8080;

dotenv.config();
const app = express();

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY);
const featuredMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularty.desc&api_key=${API_KEY}`;
const searchMovies = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

// the __dirname is the current directory from where the script is running
const __dirname = path.resolve();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/featured", async function (req, res) {
	let response = await axios.get(featuredMovies);
	let data = response.data;
	res.send(data);
});

app.get("/search/:searchTerm", async function (req, res) {
	// res.send("searchTerm is set to " + req.params.searchTerm);

	let response = await axios.get(searchMovies + req.params.searchTerm);
	// console.log(searchMovies + req.params.searchTerm);
	let data = response.data;
	res.send(data);
});

app.get("/*", function (req, res) {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.listen(port, console.log(`runnin on port ${port}`));
