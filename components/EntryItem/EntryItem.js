import styles from './EntryItem.module.scss'
import Image from 'next/image'
import { Component } from 'react'


export default function EntryItem() {

    return(
        <li className={styles.container}>
            <div className={styles.first}>
            <Image 
            className={styles.thumb}
            src='/images/test.jpeg'
            width={100}
            height={100}
            layout="responsive"
            />
            </div>
            <div className={styles.second}>
                <h3 className={styles.title}>CBU - 001</h3>
                <h6 className={styles.date}>Aug 2, 2021</h6>
                <p className={styles.body}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className={styles.seemore}>Show more</button>
            </div>
        </li>
    )
}