import HomeButton from "./components/HomeButton/HomeButton";
import styles from "./page.module.scss";
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={`${outfit.className} ${styles.home}`}>
        <div className={styles.home__hi}>
          <div className={styles.home__hi__title}>
            {/* <h1>Hi,</h1>
            <h1>I</h1>
            <h1>am</h1>
            <h1>Marcos</h1> */}
            <h1>Hi, I am Marcos</h1>
          </div>
          <HomeButton
            label="projects"
            link1="case studies"
            link2="personal"
            setLink="/projects"
          />
          <HomeButton label="contacts" link1="linkedin" link2="email" />
        </div>
        <div className={styles.home__about}>
          <p className={styles.home__about__text}>about me</p>
          <p className={styles.home__about__arrow}>seta</p>
        </div>
      </div>
    </div>
  );
}
