import styles from "./DrillHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function DrillHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
      <Link href="/">
        <p className={styles.back}>← Cool Breeze Unlimited</p>
      </Link>
      </div>
    </header>
  );
}
