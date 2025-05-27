"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./HomeButton.module.scss";

type HomeButtonProps = {
  label: string;
  link1?: string;
  link2?: string;
  setLink?: string;
};

export default function HomeButton({
  label,
  link1,
  link2,
  setLink,
}: HomeButtonProps) {
  const [clicked, setClicked] = useState(false);
  const [classname, setClassname] = useState("btn__unclicked");

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
      setClassname("btn__unclicked");
    } else {
      setClicked(true);
      setClassname("btn__clicked");
    }
  };

  return (
    <div className={styles.home__button}>
      <button onClick={handleClick}>{label}</button>
      <div className={styles[classname]}>
        {setLink ? (
          <>
            <Link href={setLink}>{link1}</Link>
            <div className={styles.dot}></div>
            <Link href={setLink}>{link2}</Link>
          </>
        ) : (
          <>
            <a href="https://www.linkedin.com/in/marcos-bnascimento">{link1}</a>
            <div className={styles.dot}></div>
            <a href="mailto:your@email.com">{link2}</a>
          </>
        )}
      </div>
    </div>
  );
}
