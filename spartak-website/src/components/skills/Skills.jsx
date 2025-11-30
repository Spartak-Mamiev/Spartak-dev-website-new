import styles from './Skills.module.css';

export function Skills() {
  return (
    <div className={styles.skillsSection}>
      <img
        src="skills.png"
        alt="skills label"
      />
      <div className={styles.skills}>
        <div className={styles.skillItem}>
          <img
            className={styles.htmlIcon}
            src="html-icon-drawn.png"
            alt="HTML icon"
          />
          <img
            className={styles.htmlLabel}
            src="html.png"
            alt="HTML5"
          />
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.cssIcon}
            src="css-icon-drawn.png"
            alt="CSS icon"
          />
          <img
            className={styles.cssLabel}
            src="css.png"
            alt="CSS"
          />
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.jsIcon}
            src="js-icon-drawn.png"
            alt="JavaScript icon"
          />
          <img
            className={styles.jsLabel}
            src="js.png"
            alt="JavaScript"
          />
        </div>
        <div className={styles.skillItem}>
          <img
            className={styles.reactIcon}
            src="react-icon-drawn.png"
            alt="React icon"
          />
          <img
            className={styles.reactLabel}
            src="react.png"
            alt="React"
          />
        </div>
      </div>
    </div>
  );
}
