import styles from "../styles/Home.module.css";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <Overview />
    </div>
  );
}
