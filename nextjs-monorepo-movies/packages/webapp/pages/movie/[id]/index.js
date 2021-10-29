import React, {useState} from "react";
import { useRouter } from "next/router";
import { Header, Layout, MovieDetails } from "../../../components";

const Movie = () => {
    const router = useRouter();

    return (
        <Layout>
			<Header isHome = {true}/>
			<MovieDetails id={router.query.id}/>
		</Layout>
    )
}

export default Movie;