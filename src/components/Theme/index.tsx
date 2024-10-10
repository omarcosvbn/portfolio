import style from "./Theme.module.scss";

export default function Theme() {
  return (
    <div className={style.theme}>
      <nav className={style.nav}>
        <a>/\/\/\/</a>
        <div className={style.nav__pages}>
          <a>About</a>
          <a>Skills</a>
          <a>Contacts</a>
        </div>
      </nav>
      <div className={style.main}></div>
    </div>
  );
}
