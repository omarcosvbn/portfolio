import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__sub}>
          <h1 className={styles.container__title}>Front-End Development</h1>
          <div className={styles.container__skills}>
            <div className={styles.container__skill}>
              <i className="devicon-html5-plain" />
            </div>
            <div className={styles.container__skill}>
              <i className="devicon-css3-plain" />
            </div>
            <div className={styles.container__skill}>
              <i className="devicon-javascript-plain" />
            </div>
            <div className={styles.container__skill}>
              <i className="devicon-typescript-plain" />
            </div>
            <div className={styles.container__skill}>
              <i className="devicon-nextjs-plain" />
            </div>
          </div>
        </div>

        <div className={styles.container__sub}>
          <h1 className={styles.container__title}>Game Development</h1>
          <div className={styles.container__skills}>
            <div className={styles.container__skill}>
              <i className="devicon-unity-plain" />
            </div>
            <div className={styles.container__skill}>
              <i className="devicon-godot-plain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
