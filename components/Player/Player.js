import styles from "./Player.module.scss";
import Play from "../../components/Icons/Play"
import Pause from "../../components/Icons/Pause"
import { useSelector } from 'react-redux';
import Plyr from 'plyr-react';
import React from 'react'

const Player = () => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const songPlaying = useSelector((state) => state.isPlaying.isCurrentlyPlaying);
  const songUrl = useSelector((state) => state.isPlaying.songUrl)
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
      <p className={styles.title}>{songPlaying}</p>
      <Plyr
        source={plyrSource}
        autoPlay='true'
      />

    </section>
  );

}

export default React.memo(Player);

