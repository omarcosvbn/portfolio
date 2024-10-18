import Link from "next/link";
import style from "./Overlay.module.scss";

export default function Theme({ children }: any) {
  return (
    <div className={style.theme}>
      <nav className={style.nav}>
        <Link className={style.nav__pages} href="../about">
          /\/\/\/
        </Link>
        <div className={style.nav__pages}>
          <Link href="../about">About</Link>
          <Link href="../about">Skills</Link>
          <Link href="../about">Contacts</Link>
        </div>
      </nav>
      <div className={style.main}>{children}</div>
    </div>
  );
}
