import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";

const featuredMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularty.desc&api_key=${process.env.REACT_APP_API_KEY}`;
const searchMovies = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	useEffect(() => {
		fetch(featuredMovies)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	}, []);
	return (
		<>
			<Search />
			<div className="movie-container">
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
}

export default App;
