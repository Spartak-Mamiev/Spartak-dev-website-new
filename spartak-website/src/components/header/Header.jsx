import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className={styles.header}>
      {/*       <div className={styles.logoContainer}>
        <img
          src="public/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </div> */}
      <div className={styles.navBar}>
        <ul>
          <li className={styles.home}>
            <Link to="/">
              <div className={styles.iconWrapper}>
                <img
                  src="home.png"
                  alt="home icon"
                />
              </div>
            </Link>
          </li>
          <li className={styles.about}>
            {/*     <Link to="/about">
              <div className={styles.iconWrapper}>
                <img
                  src="about.png"
                  alt="about icon"
                />
              </div>
            </Link> */}
          </li>
          <li className={styles.skills}>
            <Link to="/skills">
              <div className={styles.iconWrapper}>
                <img
                  src="skills.png"
                  alt="skills icon"
                />
              </div>
            </Link>
          </li>
          <li className={styles.projects}>
            <Link to="/projects">
              <div className={styles.iconWrapper}>
                <img
                  src="projects.png"
                  alt="projects icon"
                />
              </div>
            </Link>
          </li>
          <li className={styles.contact}>
            <Link to="/contact">
              <div className={styles.iconWrapper}>
                <img
                  src="contact.png"
                  alt="contact icon"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/*       <div className={styles.modeToggleContainer}>
        <label htmlFor="toggle">
          <img
            src="sun-icon.png"
            alt="sun icon"
          />
        </label>
        <input
          type="checkbox"
          id="toggle"
          className={styles.toggle}
        />
      </div> */}
    </div>
  );
}
