import styles from "./Player.module.scss";
import { useSelector } from 'react-redux';
import Plyr from 'plyr-react';
import React from 'react'
import Link from "next/link";

const Player = () => {
  const songPlaying = useSelector((state) => state.isPlaying.isCurrentlyPlaying);
  const songUrl = useSelector((state) => state.isPlaying.songUrl)
  const songId = useSelector((state) => state.isPlaying.songId)
  const plyrSource = {
    type: 'audio',
    options: [{
      autoplay: true
    }],
    sources: [{
      src: `${songUrl}`
    }]
  };
  return (
    <section className={!songPlaying ? `${styles.player_notPlaying}` : `${styles.player}` } >
<Link href={`/mixes/${songId}`} >

      <p className={styles.title}>{songPlaying}</p>
</Link>
      <Plyr
        source={plyrSource}
        autoPlay='true'
      />

    </section>
  );

}

export default React.memo(Player);

