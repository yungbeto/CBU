
import styles from "./Player.module.scss";
import Play from "../../components/Icons/Play"
import Pause from "../../components/Icons/Pause"
import { useSelector } from 'react-redux';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css'

export default function Player(props) {

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
    <section className={styles.player}>
      <p>{songPlaying}</p>
      <p>{songUrl}</p>
      <Plyr
        source={plyrSource}
        autoPlay='true'
      />

    </section>
  );

}

