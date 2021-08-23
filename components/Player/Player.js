import styles from './Player.module.scss';
import Play from '../../components/Icons/Play';
import Pause from '../../components/Icons/Pause';
import { useState } from 'react';

/*  
There is a relationship betweeen the track selected and what is being
rendered in the player. How do we create that relationship? Normally the parent 
passes the prop to its child. It seems like 'Player' is a sibling to 'EntryItem'.
so where is the parent and how can we store the state of which song is playing
and create that relationship.
*/

export default function Player(props) {
  // This state is living localy withing the Player only, where can we store this
  // so its rendered dynamically by the song thats selected?
  const [isPlaying, setIsPlaying] = useState('');

  return (
    <section className={styles.player}>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </section>
  );
}
