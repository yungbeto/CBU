import styles from './Header.module.css'
import Image from 'next/image'

const gifs = [
            '/gifs/cbu01.gif',
            '/gifs/cbu02.gif',
            '/gifs/cbu03.gif',
            '/gifs/cbu04.gif',
            '/gifs/cbu05.gif',
            '/gifs/cbu06.gif'
        ]


const randomGif = gifs[Math.floor(Math.random() * gifs.length)]

const name = 'Cool Breeze Unlimited'

export default function Header() {
    return(
            <header className={styles.header}>
                        <Image
                        className={styles.gif}
                    priority
                    src={randomGif}
                    height={144}
                    width={144}
                    alt={name}
                />
                <h1 className={styles.heading}>{name}</h1>
                <p className={styles.subheading}>A series of mixes by <a href="https://dorissaturday.bandcamp.com/" target="_blank">Doris Saturday</a> fostering positive beach energy</p>
    </header>
    )
};