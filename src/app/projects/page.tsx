"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ProjectData = {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string;
  type: string;
};

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  if (projects.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h1>Projects</h1>
      {filter === "personal" && (
        <>
          <p>{projects[0].title}</p>
        </>
      )}
      {filter === "case-studies" && <></>}
      {!filter && <></>}
    </div>
  );
}
