import styles from './List.module.scss';
import EntryItem from '../EntryItem';
import data from './data';

export default function List(props) {

  return (

    <section>
      <ul className={styles.list}>
        {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li> 
          ))}*/}
          
          {data.reverse().map(({ title, date, info }) => (    
          <EntryItem title={title} date={date} info={info} /> ) )}

      </ul>
    </section>
  )
}