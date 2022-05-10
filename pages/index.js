import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <Navbar />
      <Overview />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL_CMC}`, {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": "42fe3c93-48ce-41ff-868b-49fdac969a49",
    },
  });
  const tokens = await response.json();

  return {
    props: { initialData: tokens.data },
  };
}
