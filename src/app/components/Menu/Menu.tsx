"use client";

import { useState } from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <Link href="/">
        <div className={styles.return}></div>
      </Link>
      <div className={styles[isOpen ? "menu__close" : "menu__open"]}>
        <div className={styles[isOpen ? "links__close" : "links__open"]}>
          <a>test</a>
          <a>test</a>
          <a>test</a>
          <a>test</a>
        </div>
        <div className={styles.button} onClick={handleToggle}></div>
      </div>
    </div>
  );
}
