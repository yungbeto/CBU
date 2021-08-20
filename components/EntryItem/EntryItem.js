import styles from './EntryItem.module.scss'
import Image from 'next/image'
import { useState } from 'react';

const EntryItem = (props, {expand}) => {

    const [isExpanded, setIsExpanded] = useState(expand);

    return(
        <li key={props.key} className={styles.container}>
            <div className={styles.first}>
            <Image 
            className={styles.thumb}
            src='/images/test.jpeg'
            width={144}
            height={96}
            layout='responsive'
            />
            </div>
            <div className= {isExpanded ? `${styles.secondOpen}` : `${styles.second}` }>
                <h3 className={styles.title}>{props.title}</h3>
                <h6 className={styles.date}>{props.date}</h6>
                <p className= {isExpanded ? `${styles.bodyOpen}` : `${styles.body}`}>{props.info}</p>
                <button onClick={() => setIsExpanded(!isExpanded) } className={styles.seemore}>{isExpanded ? 'Hide details ↑ ' : 'Show details ↓'} </button>
            </div>
        </li>
    )
}

export default EntryItem;