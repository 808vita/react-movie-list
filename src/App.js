import React from "react";
import Movie from "./components/Movie";

function App() {
	// const featured = `https://api.themoviedb.org/3/discover/movie?sort_by=popularty.desc&${process.env.REACT_APP_API_KEY}`;
	// console.log(featured);
	const movies = [1, 2, 3];
	return (
		<div>
			{movies.map((movie) => (
				<Movie />
			))}
		</div>
	);
}

export default App;
