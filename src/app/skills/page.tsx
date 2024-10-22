import Overlay from "../../components/Overlay/Overlay";
import style from "./Skills.module.scss";

export default function Skills() {
  return (
    <>
      <Overlay />
      <div className={style.container}>

        <div className={style.container__images}>
          <div className={style.container__skill}>
            <i className="devicon-html5-plain" />
          </div>
          <div className={style.container__skill}>
            <i className="devicon-css3-plain" />
          </div>
          <div className={style.container__skill}>
            <i className="devicon-javascript-plain" />
          </div>
          <div className={style.container__skill}>
            <i className="devicon-typescript-plain" />
          </div>
          <div className={style.container__skill}>
            <i className="devicon-nextjs-plain" />
          </div>
          <div className={style.container__skill}>
            <i className="devicon-postgresql-plain" />
          </div>
        </div>

        <div className={style.container__images}>
          <div className={style.container__skill}>
            <i className="devicon-unity-plain" />
          </div>
          <div className={style.container__skill}>
            <i className="devicon-godot-plain" />
          </div>
        </div>
      </div>
    </>
  );
}
