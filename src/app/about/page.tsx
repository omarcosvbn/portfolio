import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.text}>
        <div className={styles.box}>
          <p>
            Hello, I’m Marcos, I develop{" "}
            <span className={styles.span}>Front-End</span> and{" "}
            <span className={styles.span}>games</span>.
          </p>
          <br/>
          <p>
            I am graduated in{" "}
            <span className={styles.span}>Design and Multimedia</span>, which allows me to apply design knowledge in every project that I make, from{" "}
            <span className={styles.span}>cute buttons</span> to{" "}
            <span className={styles.span}>user-centered design</span>.
          </p>
        </div>
      </div>
    </>
  );
}
