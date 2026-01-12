import styles from './Skills.module.css';

import htmlIcon from '/public/html-icon-drawn.png';
import htmlLabel from '/public/html.png';
import cssIcon from '/public/css-icon-drawn.png';
import cssLabel from '/public/css.png';
import jsIcon from '/public/js-icon-drawn.png';
import jsLabel from '/public/js.png';
import reactIcon from '/public/react-icon-drawn.png';
import reactLabel from '/public/react.png';

export function Skills() {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skills}>
        <div className={styles.skillItem}>
          <div className={styles.htmlIconContainer}>
            <img
              className={styles.htmlIcon}
              src={htmlIcon}
              alt="HTML icon"
            />
          </div>
          <div className={styles.htmlLabelContainer}>
            <img
              className={styles.htmlLabel}
              src={htmlLabel}
              alt="HTML5"
            />
          </div>
        </div>

        <div className={styles.skillItem}>
          <div className={styles.cssIconContainer}>
            <img
              className={styles.cssIcon}
              src={cssIcon}
              alt="CSS icon"
            />
          </div>
          <div className={styles.cssLabelContainer}>
            <img
              className={styles.cssLabel}
              src={cssLabel}
              alt="CSS"
            />
          </div>
        </div>

        <div className={styles.skillItem}>
          <div className={styles.jsIconContainer}>
            <img
              className={styles.jsIcon}
              src={jsIcon}
              alt="JavaScript icon"
            />
          </div>
          <div className={styles.jsLabelContainer}>
            <img
              className={styles.jsLabel}
              src={jsLabel}
              alt="JavaScript"
            />
          </div>
        </div>

        <div className={styles.skillItem}>
          <div className={styles.reactIconContainer}>
            <img
              className={styles.reactIcon}
              src={reactIcon}
              alt="React icon"
            />
          </div>
          <div className={styles.reactLabelContainer}>
            <img
              className={styles.reactLabel}
              src={reactLabel}
              alt="React"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
