import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const featuredMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularty.desc&api_key=${process.env.REACT_APP_API_KEY}`;
const searchMovies = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(featuredMovies)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);
	return (
		<div className="movie-container">
			{movies.length > 0 &&
				movies.map((movie) => <Movie key={movie.id} {...movie} />)}
		</div>
	);
}

export default App;
