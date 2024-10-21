import Link from "next/link";
import style from "./Overlay.module.scss";

export default function Theme() {
  return (
    <div className={style.theme}>
      <nav className={style.nav}>
        <Link className={style.nav__pages} href="../">
          /\/\/\/
        </Link>
        <div className={style.nav__pages}>
          <Link href="../about">About</Link>
          <Link href="../skills">Skills</Link>
          <Link href="../contacts">Contacts</Link>
        </div>
      </nav>
      <div className={style.main} />
    </div>
  );
}
