"use client";

import styles from "./projects.module.scss";
import projectsData from "../../projects.json";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>projects</h1>
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
