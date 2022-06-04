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

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL_CMC}`, {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": `${process.env.API_KEY}`,
    },
  });
  const tokens = await response.json();

  return {
    props: { initialData: tokens.data },
  };
}

export default MyApp;
