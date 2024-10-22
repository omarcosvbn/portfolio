import style from "./Skills.module.scss";

export default function Skills() {
  return (
    <>
      <div className={style.container}>
        <div className={style.container__sub}>
          <h1 className={style.container__title}>Front-End Development</h1>
          <div className={style.container__skills}>
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
          </div>
        </div>

        <div className={style.container__sub}>
          <h1 className={style.container__title}>Game Development</h1>
          <div className={style.container__skills}>
            <div className={style.container__skill}>
              <i className="devicon-unity-plain" />
            </div>
            <div className={style.container__skill}>
              <i className="devicon-godot-plain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
