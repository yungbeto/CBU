import styles from "./Player.module.scss";
import Play from "../../components/Icons/Play"
import Pause from "../../components/Icons/Pause"
import { useSelector } from 'react-redux';
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Player(props) {
  const songPlaying = useSelector((state) => state.isPlaying.isCurrentlyPlaying);
  const songUrl = useSelector((state) => state.isPlaying.songUrl)
  const [isPlaying, setIsPlaying] = useState('');


  return (
    <ReactPlayer url={songUrl} playing="true"/>
    // <section className={styles.player}>
    //   <p>{songPlaying}
    // {songUrl}</p>
    //   <button onClick={() => setIsPlaying(!isPlaying)}>
    //     {isPlaying ? <Pause /> : <Play />}
    //   </button>
    // </section>
  );
}
