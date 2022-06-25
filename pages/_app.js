import { useContext, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { TokenContextProvider } from "../contexts/TokenContext";
import { TopTokensProvider } from "../contexts/TopTokensContext";
import { ChartsContextProvider } from "../contexts/ChartsContext";
import { TokenContext } from "../contexts/TokenContext";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const { loading } = useContext(TokenContext);
  useEffect(() => {
    if (loading) return <Loader />;
  }, [loading]);

  return (
    <TokenContextProvider>
      <TopTokensProvider>
        <ChartsContextProvider>
          <TopBar />
          <Navbar />
          <Component {...pageProps} />
        </ChartsContextProvider>
      </TopTokensProvider>
    </TokenContextProvider>
  );
}

export default MyApp;
