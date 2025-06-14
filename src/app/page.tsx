"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { Outfit } from "next/font/google";
import { useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.page}>
      <div className={`${outfit.className} ${styles.home}`}>
        <div className={styles.intro}>
          <picture>
            <source media="(min-width: 1030px)" srcSet="/hi/hi-pc.svg" />
            <source media="(min-width: 768px)" srcSet="/hi/hi-tablet.svg" />
            <img
              src="/hi/hi-mobile.svg"
              alt="Hi, I am Marcos"
              className={styles.intro__titleImage}
            />
          </picture>

          <div className={styles.projectMenu}>
            <button
              className={styles.projectMenu__toggle}
              onClick={handleToggle}
              aria-expanded={isOpen}
            >
              projects
            </button>
            <div
              className={
                styles[
                  isOpen
                    ? "projectMenu__dropdown--open"
                    : "projectMenu__dropdown--closed"
                ]
              }
            >
              <Link href="/projects?filter=personal" className={styles.projectMenu__link}>
                <div className={styles.projectMenu__linkDot}></div>
                personal
              </Link>
              <Link href="/projects?filter=case-studies" className={styles.projectMenu__link}>
                <div className={styles.projectMenu__linkDot}></div>
                case studies
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.aboutSection__label}>about me</p>
          <p className={styles.aboutSection__arrow}>seta</p>
        </div>
      </div>
    </div>
  );
}
