import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Tabs } from 'components/Tabs';
import { useRouter } from 'next/router';

export default function Home({ query }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tabs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Tabs initialTab={query}>
          <div label='Tab 1'>
            <h2>Tab1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              culpa ab reprehenderit eveniet molestiae et amet natus itaque
              commodi ad, rem fugit beatae repellendus earum voluptates,
              recusandae eaque. Blanditiis ducimus aperiam earum ab adipisci,
              nobis iusto. Tempora cum non error, et eum consequuntur sed
              laudantium? Ad itaque adipisci aliquam assumenda temporibus optio
              expedita quos veritatis libero nisi obcaecati voluptatum odit
              dolores eius eum blanditiis nostrum culpa sint, suscipit atque
              sunt sit magnam, et cum. Sit doloremque ad nostrum nemo temporibus
              exercitationem consequatur repellat perspiciatis esse rem
              repellendus deserunt illo, vel adipisci in neque ab nisi libero
              molestias ducimus excepturi nam.
            </p>
          </div>
          <div label='Tab 2'>
            <h2>Tab2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              culpa ab reprehenderit eveniet molestiae et amet natus itaque
              commodi ad, rem fugit beatae repellendus earum voluptates,
              recusandae eaque. Blanditiis ducimus aperiam earum ab adipisci,
              nobis iusto. Tempora cum
            </p>
          </div>
          <div label='Tab 3'>
            <h2>Tab3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              culpa
            </p>
          </div>
        </Tabs>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

Home.getInitialProps = ({ query }) => {
  return { query };
};
