import Head from "next/head";
import Header from "./Header";
import styles from "./layout.module.css";

export const siteTitle = "🎷 Cool Breeze Unlimited";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Cool Breeze Unlimited is a mix series by Doris Saturday that fosters positive beach energy."
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
