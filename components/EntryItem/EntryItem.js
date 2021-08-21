import styles from './EntryItem.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link'
import Play from '../../components/Icons/Play';
import Pause from '../../components/Icons/Pause';

const EntryItem = (props, {expand}) => {

    // const [isExpanded, setIsExpanded] = useState(expand);
    const [isPlaying, setIsPlaying] = useState('');

    return(
        <li key={props.key} className={styles.container}>
            <div className={styles.first}>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <Pause /> : <Play />}</button>
            </div>
            <div className= {styles.secondOpen}>
                
                <Link href={`/mixes/${props.id}`} >

                <h3 className={styles.title}>{props.title}</h3>
                </Link>
            
                <h6 className={styles.date}>{props.date}</h6>
                <p className= {styles.bodyOpen}>{props.info}</p>
                {/* <button onClick={() => setIsExpanded(!isExpanded) } className={styles.seemore}>{isExpanded ? 'Hide details ↑ ' : 'Show details ↓'} </button> */}
            </div>
        </li>
    )
}

export default EntryItem;