import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./pages.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Player from "../components/Player";
import List from "../components/List";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <section className={styles.container}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <List />
      </Layout>
      <Player />
    </section>
  );
}
