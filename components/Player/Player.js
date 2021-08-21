import styles from "./Player.module.scss";
import Play from "../../components/Icons/Play"
import Pause from "../../components/Icons/Pause"
import { useState } from "react";

export default function Player(props) {
  const [isPlaying, setIsPlaying] = useState('');


  return (
    <section className={styles.player}>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </section>
  );
}
