import Image from "next/image";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <div className={styles.links}>
      <div className={styles.links__contacts}>
        <a
          href="mailto:omarcosvbn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.links__image}
            src="/images/email.png"
            alt="Email"
            width={100}
            height={100}
          />
        </a>
        <h2>omarcosvbn@gmail.com</h2>
      </div>
      <div className={styles.links__contacts}>
        <a
          href="https://www.linkedin.com/in/marcos-bnascimento/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.links__image}
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={100}
            height={100}
          />
        </a>
        <h2>marcos-bnascimento</h2>
      </div>
    </div>
  );
}
