import * as type from "../types";

export const getMovies = () => {
	return {
		type: type.GET_MOVIES_REQUESTED
	};
};

export const deleteMovie = (movie) => {
	return {
		type: type.DELETE_MOVIE,
		movie: movie
	};
};

export const getMovieDetails = (id) => {
	return {
		type: type.GET_MOVIE_DETAILS_REQUESTED,
		movieId: id
	}
}