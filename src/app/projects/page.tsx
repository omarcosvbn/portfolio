"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import styles from "./page.module.scss";
import Link from "next/link";

type ProjectData = {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string;
  type: string; // "personal" | "case-study"
};

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("filter");
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  const filteredProjects = filter
    ? projects.filter((p) => p.type === filter)
    : projects;

  const handleFilterChange = (type: string | null) => {
    const query = type ? `?filter=${type}` : "";
    router.push(`/projects${query}`);
  };

  return (
    <div className={`${outfit.className} ${styles.page}`}>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.return}></div>
        </Link>
        <button
          className={styles.projectsButton}
          onClick={() => handleFilterChange(null)}
        >
          projects
        </button>
        <div className={styles.filterButtons}>
          <button
            className={styles.filterButton}
            onClick={() => handleFilterChange("case-studies")}
          >
            case studies
          </button>
          <div className={styles.dot}></div>
          <button
            className={styles.filterButton}
            onClick={() => handleFilterChange("personal")}
          >
            personal
          </button>
        </div>
      </div>

      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.images}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.title}
                className={styles.projectImage}
              />
            ))
          ) : (
            <p>No projects found for "{filter}"</p>
          )}
        </div>
      )}
    </div>
  );
}
