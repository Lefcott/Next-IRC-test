import Head from "next/head";
import styles from "../styles/Home.module.css";
import Test from "../../../components/Test";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>New Project</title>
        <meta name="description" content="New Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>New Project!</h1>
        <Test />
      </main>
    </div>
  );
}
