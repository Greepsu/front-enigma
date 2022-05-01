import "../styles/globals.css";
import { TokenContextProvider } from "../contexts/TokenContext";

function MyApp({ Component, pageProps }) {
  return (
    <TokenContextProvider initialData={pageProps?.initialData}>
      <Component {...pageProps} />
    </TokenContextProvider>
  );
}

export default MyApp;
