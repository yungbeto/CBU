import styles from "./DrillHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function DrillHeader() {

  return (
    <header className={styles.header}>
      <Link href="/">
        <p className={styles.heading}>← Back</p>
      </Link>
    </header>
  );
}
