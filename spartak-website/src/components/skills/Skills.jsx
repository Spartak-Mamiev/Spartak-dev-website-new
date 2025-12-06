import styles from './Skills.module.css';

export function Skills() {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skills}>
        <div className={styles.skillItem}>
          <div className={styles.htmlIconContainer}>
            <img
              className={styles.htmlIcon}
              src="html-icon-drawn.png"
              alt="HTML icon"
            />
          </div>
          <div className={styles.htmlLabelContainer}>
            <img
              className={styles.htmlLabel}
              src="html.png"
              alt="HTML5"
            />
          </div>
        </div>

        <div className={styles.skillItem}>
          <div className={styles.cssIconContainer}>
            <img
              className={styles.cssIcon}
              src="css-icon-drawn.png"
              alt="CSS icon"
            />
          </div>
          <div className={styles.cssLabelContainer}>
            <img
              className={styles.cssLabel}
              src="css.png"
              alt="CSS"
            />
          </div>
        </div>

        <div className={styles.skillItem}>
          <div className={styles.jsIconContainer}>
            <img
              className={styles.jsIcon}
              src="js-icon-drawn.png"
              alt="JavaScript icon"
            />
          </div>
          <div className={styles.jsLabelContainer}>
            <img
              className={styles.jsLabel}
              src="js.png"
              alt="JavaScript"
            />
          </div>
        </div>

        <div className={styles.skillItem}>
          <div className={styles.reactIconContainer}>
            <img
              className={styles.reactIcon}
              src="react-icon-drawn.png"
              alt="React icon"
            />
          </div>
          <div className={styles.reactLabelContainer}>
            <img
              className={styles.reactLabel}
              src="react.png"
              alt="React"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
