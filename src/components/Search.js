import React from "react";

const handleOnSubmit = (e) => {
	e.preventDefault();
};

const Search = ({ searchTerm }) => {
	return (
		<header>
			<form onSubmit={handleOnSubmit}>
				<input
					className="search"
					type="search"
					placeholder="Search Movies"
					value={searchTerm}
				/>
			</form>
		</header>
	);
};

export default Search;
