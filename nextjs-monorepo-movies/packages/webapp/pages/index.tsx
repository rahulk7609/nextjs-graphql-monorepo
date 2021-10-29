import type { NextPage } from "next";
import { Header, Layout, MoviesList } from "../components";

const Landing: NextPage = () => {
	return (
		<Layout>
			<Header isHome={true} />
			<MoviesList />
		</Layout>
	);
};

export default Landing;
