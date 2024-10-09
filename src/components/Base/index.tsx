import style from './Base.module.scss';

export default function Base() {
  return (
    <>
      <nav className={style.nav}>
        <a>Home</a>
        <div className={style.nav__pages}>
          <a>About</a>
          <a>Skills</a>
          <a>Contacts</a>
        </div>
      </nav>
    </>
  );
}