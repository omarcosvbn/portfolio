import Image from "next/image";
import style from "./Contacts.module.scss";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className={style.links}>
      <Link href="mailto:john@example.com"><Image src="/images/email.png" alt="Email" width="100" height="100" className={style.links__image} /></Link>
      <Link href="https://johnexample.com"><Image src="/images/linkedin.png" alt="LinkedIn" width="100" height="100" className={style.links__image} /></Link>

    </div>
  );
}
