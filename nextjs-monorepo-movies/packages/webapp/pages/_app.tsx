import { AppProps } from "next/app";
import { wrapper } from "../store";

import "../styles/main.css";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

export default wrapper.withRedux(App);