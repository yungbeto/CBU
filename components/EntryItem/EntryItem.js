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
    // const isPlaying = useSelector((state) => state.isPlaying.value);
    const songUrl = useSelector((state) => state.isPlaying.songUrl);
    
    const showPlayButton = songUrl !== props.url || songUrl === ''
    const dispatch = useDispatch()
    console.log(props.info)

    return(
        <li key={props.url} className={styles.container}>
            <div className={styles.first}>
            {showPlayButton ?
                <button className={styles.button} onClick={() => dispatch(play({title: props.title, url: props.url, id: props.id}))}><Play /></button>
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
            <Link href={`/mixes/${props.id}`} >
                <h3 className={styles.title}>{props.title}</h3>
                </Link>
            
                <h6 className={styles.date}>{props.date}</h6>
                <p className= {styles.bodyOpen}>{props.info}</p>
                <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />

                <Link href={`/mixes/${props.id}`} >
                <p className= {styles.seemore}>Tracklist →</p>
                </Link>
            </div>
        </li>
    )
}

export default EntryItem;