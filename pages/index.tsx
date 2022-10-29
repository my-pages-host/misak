import Head from "next/head";
import {OldHome} from "@x/x/OldHome";
import styles from "../styles/Home.module.css";
import {Cover} from "../src/Cover";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <OldHome>
          <Cover />
        </OldHome>
      </main>
    </div>
  );
}
