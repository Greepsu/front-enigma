import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { TokenContextProvider } from "../contexts/TokenContext";

function MyApp({ Component, pageProps }) {
  return (
    <TokenContextProvider initialData={pageProps?.initialData}>
      <Navbar />
      <Component {...pageProps} />
    </TokenContextProvider>
  );
}

export default MyApp;
