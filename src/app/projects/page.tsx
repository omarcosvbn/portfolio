"use client";

import styles from "./projects.module.scss";
import projectsData from "../../projects.json";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1>projects</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={styles.projectCard}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              width={300}
              height={200}
              className={styles.thumbnail}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
