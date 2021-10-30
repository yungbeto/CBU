import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/dist/client/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { useSelector, useDispatch } from "react-redux";
import { play, stop } from "../../src/features/isPlaying/isPlayingSlice";
import styles from "./Drilldown.module.scss";
import Play from "../../components/Icons/Play";
import Stop from "../../components/Icons/Stop";
import Download from "../../components/Icons/Download";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const songUrl = useSelector((state) => state.isPlaying.songUrl);

  const showPlayButton = songUrl !== postData.url || songUrl === "";
  const dispatch = useDispatch();

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <section className={styles.inner}>
        <div className={styles.mixBox}>
          <div className={styles.mixHead}>
            <h1 className={styles.title}>{postData.title}</h1>
            <p className={styles.subtitle}>{postData.date}</p>
            <p>{postData.slug}</p>
            <div className={styles.buttonContainer}>
              {showPlayButton ? (
                <button
                  className={styles.button}
                  onClick={() =>
                    dispatch(play({ title: postData.title, url: postData.url }))
                  }
                >
                  <Play /> Play
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => dispatch(stop(postData.title))}
                >
                  <Stop /> Stop
                </button>
              )}
              <Link href={postData.url}>
                <button className={styles.button}>
                  <Download /> Download
                </button>
              </Link>
            </div>
          </div>

          <div
            className={styles.tracklist}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </section>
    </Layout>
  );
}
