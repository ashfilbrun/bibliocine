import Image from "next/image";
import styles from "./page.module.css";
import navBar from "./navbar.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <navBar></navBar>
      <main className={styles.main}></main>       
    </div>
  );
}
