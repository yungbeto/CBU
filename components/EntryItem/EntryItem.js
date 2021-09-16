import styles from './EntryItem.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { play, stop } from '../../src/features/isPlaying/isPlayingSlice';
import Link from 'next/link'
import Play from '../../components/Icons/Play';
import Stop from '../../components/Icons/Stop';
import Download from '../../components/Icons/Download'

const EntryItem = (props) => {
    console.log(props)
    // const [isExpanded, setIsExpanded] = useState(expand);
    // const [isPlaying, setIsPlaying] = useState('');
    const isPlaying = useSelector((state) => state.isPlaying.value);
    const dispatch = useDispatch()

    return(
        <li key={props.url} className={styles.container}>
            <div className={styles.first}>
            {!isPlaying ?
            <button className={styles.button} onClick={() => dispatch(play({title: props.title, url: props.url}))}><Play /></button>
            :
            <button className={styles.button} onClick={() => dispatch(stop(props.title))}><Stop /></button>
             }
             <Link href={props.url}>
                 <button className={styles.button}>
                     <Download />
                     </button> 
             </Link>
            </div>
            <div className= {styles.secondOpen}>
                
                <h3 className={styles.title}>{props.title}</h3>
            
                <h6 className={styles.date}>{props.date}</h6>
                <p className= {styles.bodyOpen}>{props.info}</p>
                <Link href={`/mixes/${props.id}`} >
                <p className= {styles.seemore}>See more</p>
                </Link>
            </div>
        </li>
    )
}

export default EntryItem;