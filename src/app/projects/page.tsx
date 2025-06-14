import { useSearchParams } from "next/navigation";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  return (
    <div>
      <h1>Projects</h1>
      {filter === "personal" && <></>}
      {filter === "case-studies" && <></>}
      {!filter && <></>}
    </div>
  );
}
