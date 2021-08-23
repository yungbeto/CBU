import styles from './EntryItem.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Play from '../../components/Icons/Play';
import Pause from '../../components/Icons/Pause';

const EntryItem = ({ slug, date, title, url, id }) => {
  // 'expanded' can work as a hook since no other component needs to refrence the
  // state of showing details.
  const [expand, isExpand] = useState(false);

  // isPlaying should be global state since only one song can play at a time,
  // like "Player" since theres a relationship we should store it globally...
  const [isPlaying, setIsPlaying] = useState('');

  return (
    <li key={url} className={styles.container}>
      <div className={styles.first}>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
      <div className={styles.secondOpen}>
        <Link href={`/mixes/${id}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <h6 className={styles.date}>{date}</h6>
        <p className={styles.bodyOpen}>{slug}</p>
        <button onClick={() => isExpand(!expand)} className={styles.seemore}>
          {expand ? 'Hide details ↑ ' : 'Show details ↓'}
        </button>
        {/* you can conditionally render multiple JSX/HTML lines like you did with line 32 */}
        {!expand ? (
          ''
        ) : (
          <>
            <h3>Detail Title</h3>
            <p>This is a p tag with more comments</p>
          </>
        )}
      </div>
    </li>
  );
};

export default EntryItem;
