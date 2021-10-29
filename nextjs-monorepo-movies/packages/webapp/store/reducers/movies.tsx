import * as type from '../types';

const initialState = {
	moviesList: [],
	loading: false,
	error: null,

	movieDetails: null,
	loadingMovieDetails: false
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.GET_MOVIES_REQUESTED:
			return {
				...state,
				loading: true
			};
		case type.GET_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				moviesList: action.movies
			};
		case type.GET_MOVIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.message
			};
		case type.DELETE_MOVIE:
			let movie = action.movie;
			let filtered = state.moviesList.filter((item) => item.id !== movie.id);
			return {
				...state,
				moviesList: filtered
			};
		case type.GET_MOVIE_DETAILS_REQUESTED:
			return {
				...state,
				loadingMovieDetails: true
			};
		case type.GET_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				loadingMovieDetails: false,
				movieDetails: action.movieDetails
			};
		case type.GET_MOVIE_DETAILS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message
			};
		default:
			return state;
	}
};

export default moviesReducer;
