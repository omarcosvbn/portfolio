import HomeButton from "./components/HomeButton/HomeButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.home}>
        <h1 className={styles.home__title}>Hi, I am Marcos</h1>
        <HomeButton
          label="projects"
          link1="case studies"
          link2="personal"
          setLink="/projects"
        />
        <HomeButton label="contacts" link1="linkedin" link2="email" />
        <div className={styles.home__about}>
          <p className={styles.home__about__text}>about me</p>
          <div className={styles.home__about__arrow}>seta</div>
        </div>
      </div>
    </div>
  );
}
