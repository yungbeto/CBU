import "../styles/global.scss";
import Player from "../components/Player";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Player />
    </>
  )

    ;
}
