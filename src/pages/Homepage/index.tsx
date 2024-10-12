import Theme from "../../components/Theme";
import style from "./Homepage.module.scss";
import Typewriter from "typewriter-effect";

export default function Homepage() {
  return (
    <>
      <Theme />
      <div>
        <div className={style.type}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Marcos")
                .start();
            }}
          />
        </div>
        <img src="/assets/arrow.svg" alt="" width="100px" className={style.arrow}/>
        <p>(scroll just a bit more)</p>
      </div>
      <div>
        <h2>projects</h2>
      </div>
    </>
  );
}
