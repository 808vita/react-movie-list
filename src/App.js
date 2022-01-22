import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const featuredMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularty.desc&api_key=${process.env.REACT_APP_API_KEY}`;

const searchMovies = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			fetch(`${searchMovies}${searchTerm}`)
				.then((res) => res.json())
				.then((data) => {
					setMovies(data.results);
				});

			setSearchTerm("");
		}
	};

	useEffect(() => {
		fetch(featuredMovies)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	}, []);

	return (
		<>
			<header>
				<form onSubmit={handleOnSubmit}>
					<input
						className="search"
						type="search"
						placeholder="Search Movies"
						value={searchTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>
			<div className="movie-container">
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
}

export default App;
