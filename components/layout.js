import Head from "next/head";
import Header from "./Header";
import DrillHeader from "./DrillHeader";
import styles from "./layout.module.scss";
import { useSelector } from "react-redux";

export const siteTitle = "🎷 Cool Breeze Unlimited";

export default function Layout({ children, home }) {
  const songPlaying = useSelector((state) => state.isPlaying.isCurrentlyPlaying);
  return (
    <div className={!songPlaying ? `${styles.container}` : `${styles.activeContainer}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Cool Breeze Unlimited is a mix series by Roby Saavedra that fosters positive beach energy."
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {home ? 
        <Header /> : <DrillHeader />
      }
      <section className={styles.inner}>
        <main>{children}</main>
      </section>
    </div>
  );
}
