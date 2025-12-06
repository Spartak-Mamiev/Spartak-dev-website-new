import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="public/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.navBar}>
        <ul>
          <li className={styles.home}>
            <img
              src="home.png"
              alt="home icon"
            />
          </li>
          <li className={styles.about}>
            <img
              src="about.png"
              alt="about icon"
            />
          </li>
          <li className={styles.skills}>
            <img
              src="skills.png"
              alt="skills icon"
            />
          </li>
          <li className={styles.projects}>
            <img
              src="projects.png"
              alt="projects icon"
            />
          </li>
          <li className={styles.contact}>
            <img
              src="contact.png"
              alt="contact icon"
            />
          </li>
        </ul>
      </div>

      <div className={styles.modeToggleContainer}>
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
      </div>
    </div>
  );
}
