import style from './Navbar.module.scss';

export default function Navbar() {
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