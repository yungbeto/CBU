import styles from './List.module.scss';
import EntryItem from '../EntryItem';
import data from '../../lib/data';

export default function List(props) {

  return (

    <section>
      <ul className={styles.list}>

          {data.reverse().map(({ title, date, info }) => (    
          <EntryItem title={title} date={date} info={info} /> ) )}

      </ul>
    </section>
  )
}