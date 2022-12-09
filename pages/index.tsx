import Head from "next/head";
import { All } from "../src/All";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michaela Podlipská</title>
        <meta name="description" content="Každý pracovní den chci zakončit s pocitem, že se zvýšila spokojenost zákazníka skrze přidanou hodnotu mojí práce." />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <All />
      </main>
    </div>
  );
}
