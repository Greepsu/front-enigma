import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { TokenContextProvider } from "../contexts/TokenContext";
import { TopTokensProvider } from "../contexts/TopTokensContext";

function MyApp({ Component, pageProps }) {
  return (
    <TokenContextProvider initialData={pageProps?.initialData}>
      <TopTokensProvider>
        <Navbar />
        <Component {...pageProps} />
      </TopTokensProvider>
    </TokenContextProvider>
  );
}

export default MyApp;
