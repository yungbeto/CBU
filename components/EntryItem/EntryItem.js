import styles from './EntryItem.module.scss'
import Image from 'next/image'
import { useState } from 'react';

export default function EntryItem({expand}) {

    const [isExpanded, setIsExpanded] = useState(expand);

    return(
        <li className={styles.container}>
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
                <h3 className={styles.title}>CBU - 001</h3>
                <h6 className={styles.date}>Aug 2, 2021</h6>
                <p className= {isExpanded ? `${styles.bodyOpen}` : `${styles.body}`}>
                    
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. <br /><br />
                Tracklist - <br />
                Jan Hammer - Peaceful Sundown [00:33] <br />
                Roberto Carlos - Mira (Olha) [01:09] <br />
                Joe Tossini - Sincerita [04:56] <br />
                Flames Brentford Rockers - Amagideon [09:44] <br />
                Devid Benoit - I Wish Right Now Would Never End [12:45] <br />
                Alexander Katenin - Все, Что Мы Знаем [14:05] <br />
                Masaru Imada - Angelfish [17:55] <br />
                Slow Attack Ensemble - Early Dawning [22:00] <br />
                Batteaux - High Tide [24:30] <br />
                Omar Hill, Art Webb - Brazillian Eyes [28:14] <br />
                James Mason - Mbewe [32:19] <br />
                George Duke - Love Reborn [34:45] <br />
                Calvin Keys - Maria’s First [38:54] <br />
                Bread Butter - Summer Blue [46:06] <br />
                Jennifer Lara - Weekend Loving [50:18] <br />
                Car Culture - Waterbaby [53:46] <br />
                John Mclaughlin - My Foolish Heart [56:51]
</p>
                <button onClick={() => setIsExpanded(!isExpanded) } className={styles.seemore}>{isExpanded ? 'Hide details ↑ ' : 'Show details ↓'} </button>
            </div>
        </li>
    )
}