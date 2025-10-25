"use client";

import styles from "./Header.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  const router = useRouter();

  return (
    <header
      className={`${styles.header} ${!isHome ? styles.notHomeDesktop : ""}`}
    >
      <button
        onClick={() => router.back()}
        className={`${styles.backButton} ${
          !isProjects ? styles.notProjects : ""
        }`}
      >
        <Image src="/back-button.webp" alt={"Back button"} width={100} height={40}/>
        <Image src="/back-arrow.webp" className={styles.underline} alt={"Back button"} width={100} height={16}/>
      </button>
      <button onClick={handleClick} className={styles.menu}>
        <Image
          src={isOpen ? "/close.webp" : "/open.webp"}
          className={styles.image}
          alt={isOpen ? "Close button" : "Open button"}
          width={42}
          height={42}
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
            <a href="https://github.com/omarcosvbn" onClick={handleCloseMenu}>
              github
            </a>
          </li>
          <li>
            <a href="mailto:omarcosvbn@gmail.com">omarcosvbn@gmail.com</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
