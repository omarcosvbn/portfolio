"use client";
import { TypeAnimation } from "react-type-animation";
import style from "../styles/Home.module.scss";
import Overlay from "../components/Overlay/Overlay";

export default function Home() {
  return (
    <Overlay>
      <div className={style.thirds}>
        <h1 className={style.thirds__first__hi}>Hello, my name is</h1>
        <TypeAnimation
          className={style.thirds__first__name}
          sequence={["Marcos"]}
          speed={{
            type: "keyStrokeDelayInMs",
            value: 150,
          }}
        />
      </div>

      <div className={style.thirds}>
        <img
          src="/images/arrow.svg"
          alt=""
          width="100px"
          className={style.thirds__arrow}
        />
      </div>

      <div className={style.thirds}>
        <h2>projects</h2>
        <h2>projects</h2>
      </div>
    </Overlay>
  );
}
