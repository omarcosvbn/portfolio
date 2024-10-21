import Overlay from "../../components/Overlay/Overlay";
import style from "./About.module.scss";

export default function About() {
  return (
    <>
      <Overlay />
      <div className={style.text}>
        <p>
          Hello, I’m Marcos, I develop <span className={style.span}>Front-End</span> and <span className={style.span}>games</span>.
        </p>
        <p>
          Graduated in <span className={style.span}>Design and Multimedia</span>, I apply my design knowledge in
          every project that I make, from <span className={style.span}>cute buttons</span> to <span className={style.span}>user-centered design</span>.
        </p>
      </div>
    </>
  );
}
