import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./pages.module.scss";
import { getSortedPostsData } from "../lib/posts";
import EntryItem from "../components/EntryItem";
import { useSelector } from 'react-redux';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  return (
    
    // <section className={!isPlaying ? `${styles.container_notPlaying}` : `${styles.container}`}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.inner}> 
        <ul className={styles.list}>
          {allPostsData.map(({ slug, date, title, url, id, contentHtml }, index) => (
            <EntryItem url={url} title={title} date={date} info={slug} id={id} index={index} content={contentHtml} />
            ))}
        </ul>
            </div>
      </Layout>
    // </section>
  );
}
