import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Tabs } from 'components/Tabs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tabs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Tabs></Tabs>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
