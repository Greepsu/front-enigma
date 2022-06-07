import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { TokenContextProvider } from "../contexts/TokenContext";
import { TopTokensProvider } from "../contexts/TopTokensContext";
import { ChartsContextProvider } from "../contexts/ChartsContext";

function MyApp({ Component, pageProps }) {
  return (
    <TokenContextProvider initialData={pageProps?.initialData}>
      <TopTokensProvider>
        <ChartsContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </ChartsContextProvider>
      </TopTokensProvider>
    </TokenContextProvider>
  );
}

export default MyApp;
