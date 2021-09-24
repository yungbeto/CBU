import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
    const gifs = [
            '/gifs/cbu01.gif',
            '/gifs/cbu02.gif',
            '/gifs/cbu03.gif',
            '/gifs/cbu04.gif',
            '/gifs/cbu05.gif',
            '/gifs/cbu06.gif',
            '/gifs/cbu07.gif',
            '/gifs/cbu08.gif',
            '/gifs/cbu09.gif',
            '/gifs/cbu10.gif',
            '/gifs/cbu11.gif'
        ]


const randomGif = gifs[Math.floor(Math.random() * gifs.length)]

const name = 'Cool Breeze Unlimited'
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
                <Link href='/'>

                <h1 className={styles.heading}>{name}</h1>
                </Link>
                <p className={styles.subheading}>Music for imaginary shores.</p>
    </header>
    )
};
