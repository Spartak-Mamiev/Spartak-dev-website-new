import styles from './Projects.module.css';

export function Projects() {
  return (
    <div className={styles.projectsSection}>
      <img
        src="projects.png"
        alt=""
      />
      <div className={styles.projects}>
        <div className={styles.project}>
          <img
            className={styles.projectLabel}
            src="ecommerce-label.png"
            alt="E-commerce Project label"
          />
          <img
            className={styles.projectImage}
            src="ecommerce-image-widescreen.png"
            alt="
          E-commerce Project image"
          />
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectLabel}
            src="calculator-app-label.png"
            alt="Calculator Project label"
          />
          <img
            className={styles.projectImage}
            src="calculator-screen-shot.png"
            alt="Calculator Project"
          />
        </div>
      </div>
    </div>
  );
}
