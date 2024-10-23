import style from "./About.module.scss";

export default function About() {
  return (
    <>
      <div className={style.text}>
        <div className={style.box}>
          <p>
            Hello, I’m Marcos, I develop{" "}
            <span className={style.span}>Front-End</span> and{" "}
            <span className={style.span}>games</span>.
          </p>
          <br/>
          <p>
            I am graduated in{" "}
            <span className={style.span}>Design and Multimedia</span>, which allows me to apply design knowledge in every project that I make, from{" "}
            <span className={style.span}>cute buttons</span> to{" "}
            <span className={style.span}>user-centered design</span>.
          </p>
        </div>
      </div>
    </>
  );
}
