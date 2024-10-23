import Image from "next/image";
import style from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <div className={style.links}>
      <div className={style.links__contacts}>
        <a
          href="mailto:omarcosvbn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={style.links__image}
            src="/images/email.png"
            alt="Email"
            width={100}
            height={100}
          />
        </a>
        <h2>omarcosvbn@gmail.com</h2>
      </div>
      <div className={style.links__contacts}>
        <a
          href="https://www.linkedin.com/in/marcos-bnascimento/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={style.links__image}
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
