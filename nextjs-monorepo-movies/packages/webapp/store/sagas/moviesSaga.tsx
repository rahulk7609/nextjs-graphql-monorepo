import { call, put, takeEvery } from 'redux-saga/effects';
import { request, gql } from 'graphql-request';
import * as type from '../types';

const apiUrl = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

function getMoviesApi() {
	const query = gql`
		{
			allFilms {
				films {
					id,
					title
					releaseDate
					director
				}
			}
		}
	`;
	const response = request(apiUrl, query).then((data) => data);
	return response;
}
function* fetchMovies() {
	try {
		const movies = yield call(getMoviesApi);
		yield put({ type: type.GET_MOVIES_SUCCESS, movies: movies.allFilms ? movies.allFilms.films : [] });
	} catch (e) {
		yield put({ type: type.GET_MOVIES_FAILED, message: e.message });
	}
}

function getMovieDetailsApi(data) {
	console.log('data',data);
	const query = gql`
	{
		film(id: "ZmlsbXM6MQ==") {
		  id
		  title
		  episodeID
		  director
		  producers
		  releaseDate
		  openingCrawl
		}
	}	  
	`;
	const response = request(apiUrl, query).then((data) => data);
	return response;
}
function* fetchMovieDetails(payload) {
	try {
		const movieDetails = yield call(getMovieDetailsApi, payload);
		yield put({ type: type.GET_MOVIE_DETAILS_SUCCESS, movieDetails: movieDetails.film ? movieDetails.film: null });
	} catch (e) {
		yield put({ type: type.GET_MOVIE_DETAILS_FAILED, message: e.message });
	}
}


export default function* moviesSaga() {
	yield takeEvery(type.GET_MOVIES_REQUESTED, fetchMovies);
	yield takeEvery(type.GET_MOVIE_DETAILS_REQUESTED, fetchMovieDetails);
}
