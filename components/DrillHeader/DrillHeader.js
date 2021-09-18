import styles from "./DrillHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function DrillHeader() {

  return (
    <header className={styles.header}>
        <div className={styles.top}>

        🌴 Cool Breeze Unlimited
        </div>
      <Link href="/">
        <p className={styles.heading}>← Back</p>
      </Link>
    </header>
  );
}
