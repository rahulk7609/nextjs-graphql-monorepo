import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'shared';
import Router from 'next/router';

import { getMovies, deleteMovie } from '../store';

export function MoviesList() {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies.moviesList);
	const loading = useSelector((state) => state.movies.loading);

	useEffect(() => {
		if(!movies || movies.length == 0 ){
			dispatch(getMovies([]));
		}
	}, []);

	const handleMovieClick = (movieId) => {
		Router.push("/movie/"+movieId);
	}
	const handleMovieDelete = (movie) => {
		dispatch(deleteMovie(movie));
	};

	return (
		<>
		{loading ? (
			<div className="mt-3 py-5 card">
				<h5 className="text-center">Loading movies...</h5>
			</div>
		):(

			<table className="table mt-3 bg-white">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Director</th>
						<th scope="col">Release Date</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				{movies &&
				movies.length > 0 && (
					<tbody>
						{movies.map((movie, index) => (
							<tr key={index}>
								<th scope="row">{index + 1}</th>
								<td className="link-item" onClick={()=>handleMovieClick(movie.id)}>{movie.title}</td>
								<td>{movie.director}</td>
								<td>{movie.releaseDate}</td>
								<td id={movie.id}>
									<div className="d-flex flex-row">
										{/* <Button>Edit</Button> */}
										<Button onClick={() => handleMovieDelete(movie)}>
											Delete
										</Button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				)}
			</table>
		)}
		</>
	);
}
