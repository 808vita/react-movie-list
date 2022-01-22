import React from "react";

const moviePoster = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
	return (
		<div className="movie">
			<img
				src={
					poster_path
						? moviePoster + poster_path
						: "https://avatars.githubusercontent.com/u/97225946?v=4"
				}
				alt={title}
			/>

			<div className="movie-info">
				<h3>{title}</h3>
				<span className="tag">{vote_average}</span>
			</div>
			<div className="movie-over">
				<h2>Overview:</h2>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default Movie;
