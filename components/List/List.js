import styles from './List.module.scss'
import EntryItem from '../EntryItem'

export default function List() {
    return(


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
          <EntryItem />
          <EntryItem />
          <EntryItem />
          <EntryItem />
          <EntryItem />
          <EntryItem />
          <EntryItem />
          <EntryItem />
          <EntryItem />
        </ul>
      </section>
    )
}