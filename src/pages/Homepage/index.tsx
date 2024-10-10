import Theme from "../../components/Theme";
import style from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <Theme />
      <div className={style.test}>
        <p className={style.test__space}>a</p>
        <p className={style.test__space}>a</p>
        <p className={style.test__space}>a</p>
        <p className={style.test__space}>a</p>
        <p className={style.test__space}>a</p>
        <p className={style.test__space}>a</p>
      </div>
    </>
  );
}
