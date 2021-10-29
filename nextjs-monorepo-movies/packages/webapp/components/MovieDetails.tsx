import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";

import { getMovieDetails } from '../store';

export function MovieDetails(props) {
    const dispatch = useDispatch();

	const movieDetails = useSelector((state) => state.movies.movieDetails);
	const loading = useSelector((state) => state.movies.loadingMovieDetails);

	useEffect(() => {
		if(!movieDetails ){
			dispatch(getMovieDetails('ZmlsbXM6Mg=='));
		}
	}, []);

	return (
		<>
            {loading ? (
                <div className="mt-3 py-5 card">
                    <h5 className="text-center">Loading movies...</h5>
                </div>
            ):(
                <div className="card mt-3 px-4 py-4">
                    {movieDetails ? (
                        <div>
                            <div className="details-row">
                                <h5>Title: </h5>
                                <p>{movieDetails.title}</p>
                            </div>
                            <div className="details-row">
                                <h5>Director: </h5>
                                <p>{movieDetails.director}</p>
                            </div>
                            <div className="details-row">
                                <h5>Release Date: </h5>
                                <p>{movieDetails.releaseDate}</p>
                            </div>
                            <div className="details-row">
                                <h5>Episode ID: </h5>
                                <p>{movieDetails.episodeID}</p>
                            </div>
                            {movieDetails.producers && movieDetails.producers.length>0 &&
                            <div className="details-row">
                                <h5>Episode ID: </h5>
                                <p>{movieDetails.producers.map((p,ind)=><span key={ind}>{p}{ind+1 !== movieDetails.producers.length && ", "}</span>)}</p>
                            </div>
                            }
                             <div className="details-row align-items-start">
                                <h5>Opening Crawl: </h5>
                                {movieDetails.openingCrawl}
                            </div>
                        </div>
                    ): (
                        <h3>Movie details not found</h3>
                    )}
                </div>
            )}
        </>
	);
}
