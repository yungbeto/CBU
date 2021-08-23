import Head from 'next/head';
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import styles from './pages.module.scss';
import { getSortedPostsData } from '../lib/posts';
import EntryItem from '../components/EntryItem';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [playing, isPlaying] = useState(0);
  return (
    <section className={styles.container}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <ul className={styles.list}>
          {allPostsData.map((post) => (
            // We can spread all the props into the componet with {...anything}
            <EntryItem {...post} />
          ))}
        </ul>
      </Layout>
    </section>
  );
}
