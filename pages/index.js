import styles from "../styles/Home.module.css";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <div className={styles.container}>
      <Overview />
    </div>
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
