import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Overview from "./Overview";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <Navbar />
      <Overview />
    </div>
  );
}
