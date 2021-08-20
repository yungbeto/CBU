import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./pages.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Player from "../components/Player";
import EntryItem from "../components/EntryItem";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData, postBody }) {
  return (
    <section className={styles.container}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <ul className={styles.list}>
          {allPostsData.map(({ slug, date, title, url }) => (
            <EntryItem key={url} title={title} date={date} info={slug} />
          ))}
        </ul>
      </Layout>
    </section>
  );
}
