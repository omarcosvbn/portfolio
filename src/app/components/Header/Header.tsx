"use client";

import styles from "./Header.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProjects = pathname.startsWith("/projects");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${!isHome ? styles.notHomeDesktop : ""}`}
    >
      <Link
        href="/"
        className={!isProjects ? styles.notProjects : ""}
      >
        <img src="https://placehold.co/50x50" />
      </Link>
      <button onClick={handleClick} className={styles.menu}>
        <img
          src={isOpen ? "https://placehold.co/50x50" : "https://placehold.co/50x50"}
          className={styles.image}
        />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <Link href={"/projects"} onClick={handleCloseMenu}>
              projects
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcos-bnascimento/"
              onClick={handleCloseMenu}
            >
              linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/omarcosvbn" onClick={handleCloseMenu}>
              github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
