"use client";

import { useState } from "react";
import styles from "./Menu.module.scss";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles[isOpen ? "menu__open" : "menu__close"]}>
      <div className={styles[isOpen ? "links__open" : "links__close"]}>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
      </div>
      <div className={styles.button} onClick={handleToggle}></div>
    </div>
  );
}
