import HomeButton from "./components/HomeButton/HomeButton";
import styles from "./page.module.scss";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={`${outfit.className} ${styles.home}`}>
        <div className={styles.home__hi}>
          <picture>
            <source media="(max-width: 768px)" srcSet="/hi/hi-mobile.svg" />
            <source media="(max-width: 1440px)" srcSet="/hi/hi-tablet.svg" />
            <img
              src="/hi/hi-pc.svg"
              alt="Hi, I am Marcos"
              className={styles.home__hi__title}
            />
          </picture>
          <div className={styles.home__button}>
            <HomeButton
              label="projects"
              link1="case studies"
              link2="personal"
              setLink="/projects"
            />
            <div className={styles.home__button__last}>
              <HomeButton label="contacts" link1="linkedin" link2="email" />
            </div>
            <div className={styles.home__button__links}>
              <a href="#" className={styles.home__button__links__link}>
                Link 1
              </a>
              <a href="#" className={styles.home__button__links__link}>
                Link 2
              </a>
            </div>
          </div>
        </div>
        <div className={styles.home__about}>
          <p className={styles.home__about__text}>about me</p>
          <p className={styles.home__about__arrow}>seta</p>
        </div>
      </div>
    </div>
  );
}
