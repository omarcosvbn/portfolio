"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

type ProjectData = {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string;
  type: string; // "personal" | "case-study"
};

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
    <div className={styles.page}>
      <h1>Projects</h1>

      <div className={styles.filterButtons}>
        <button onClick={() => handleFilterChange("personal")}>
          personal
        </button>
        <button onClick={() => handleFilterChange("case-studies")}>
          case studies
        </button>
        <button onClick={() => handleFilterChange(null)}>
          all
        </button>
      </div>

      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
