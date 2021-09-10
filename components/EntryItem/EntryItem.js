import styles from './EntryItem.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { play, stop } from '../../src/features/isPlaying/isPlayingSlice';
import Link from 'next/link'
import Play from '../../components/Icons/Play';
import Pause from '../../components/Icons/Pause';

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
            <button onClick={() => dispatch(play({title: props.title, url: props.url}))}><Play /></button>
            :
            <button onClick={() => dispatch(stop(props.title))}><Pause /></button>
             }
            </div>
            <div className= {styles.secondOpen}>
                
                <Link href={`/mixes/${props.id}`} >

                <h3 className={styles.title}>{props.title}</h3>
                </Link>
            
                <h6 className={styles.date}>{props.date}</h6>
                <p className= {styles.bodyOpen}>{props.info}</p>
            </div>
        </li>
    )
}

export default EntryItem;