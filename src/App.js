import React, { useEffect, useState } from "react";
import Movie from "./components/Movie.js";

const featuredMovies = "/featured";
const searchMovies = "/search/";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(`${searchMovies}${searchTerm}`);
			setSearchTerm("");
		}
	};

	useEffect(() => {
		getMovies(featuredMovies);
	}, []);

	// const getMovies = (API) => {
	// 	fetch(API)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setMovies(data.results);
	// 		});
	// };

	const getMovies = async (API) => {
		const res = await axios.get(API);
		let data = response.data;
		setMovies(data.results);
	};

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
