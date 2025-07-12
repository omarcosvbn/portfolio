import styles from "./page.module.scss";
import Link from "next/link";
import data from "@/app/data/data.json";

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const { title, image, description, technologies } =
    data.find((p) => p.id === id) ?? {};

  if (!title) {
    return (
      <div className={styles.page}>
        <div className={styles.nav}>
          <Link href="/projects">
            <div className={styles.return}></div>
          </Link>
        </div>
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <Link href="/projects">
          <div className={styles.return}></div>
        </Link>
      </div>
      <div className={styles.projectDetails}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.projectInfo}>
          <h1>{title}</h1>
          <p>{technologies}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
