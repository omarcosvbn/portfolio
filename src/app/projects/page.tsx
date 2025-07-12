"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Outfit } from "next/font/google";
import styles from "./page.module.scss";
import Link from "next/link";
import data from "@/app/data/data.json";

type ProjectData = {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string;
  type: string; 
};

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("filter");

  const projects: ProjectData[] = data;

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

      {filteredProjects.length === 0 ? (
        <p>No projects found for "{filter}"</p>
      ) : (
        <div className={styles.images}>
          {filteredProjects.map((p) => (
            <Link
              className={styles.projectLink}
              key={p.id}
              href={`/projects/${p.id}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className={styles.projectImage}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
