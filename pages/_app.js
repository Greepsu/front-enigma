import "../styles/globals.css";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { TokenContextProvider } from "../contexts/TokenContext";
import { TopTokensProvider } from "../contexts/TopTokensContext";
import { ChartsContextProvider } from "../contexts/ChartsContext";

function MyApp({ Component, pageProps }) {
  return (
    <TokenContextProvider initialData={pageProps?.initialData}>
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
