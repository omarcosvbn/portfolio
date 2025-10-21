"use client";

import { useParams } from "next/navigation";
import projectsData from "../../../projects.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.scss";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = parseInt(params.id as string);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.page}>
        <div className={styles.error}>
          <h1>Project not found</h1>
          <Link href="/projects">← Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.projectHeader}>
        <img src={project.thumbnail} />
        <div className={styles.info}>
          <h1>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
      </div>

      <div className={styles.imageGallery}>
        {project.images.map((image, index) => (
          <img
            src={image}
            alt={`${project.title} - Image ${index + 1}`}
            width={800}
            height={600}
            className={styles.projectImage}
          />
        ))}
      </div>
    </div>
  );
}
