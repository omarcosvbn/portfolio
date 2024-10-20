"use client";
import { TypeAnimation } from "react-type-animation";
import style from "../styles/Home.module.scss";
import Overlay from "../components/Overlay/Overlay";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Overlay />
        <div className={style.thirds__first}>
          <h1 className={style.thirds__first__hi}>Hello, my name is</h1>
          <TypeAnimation
            className={style.thirds__first__name}
            sequence={["Matcos", 200, "Marcos"]}
            speed={{
              type: "keyStrokeDelayInMs",
              value: 250,
            }}
            preRenderFirstString={true}
          />
        </div>

        <div className={style.thirds__second}>
          <Image
            src="/images/arrow.svg"
            alt=""
            width={200}
            height={200}
            className={style.thirds__second__arrow}
          />
        </div>

        <div className={style.thirds__third}>
          <h2>projects</h2>
          <h2>projects</h2>
        </div>
    </>
  );
}
