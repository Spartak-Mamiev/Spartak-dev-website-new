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
            <div className={styles.iconWrapper}>
              <img
                src="home.png"
                alt="home icon"
              />
            </div>
          </li>
          <li className={styles.about}>
            <div className={styles.iconWrapper}>
              <img
                src="about.png"
                alt="about icon"
              />
            </div>
          </li>
          <li className={styles.skills}>
            <div className={styles.iconWrapper}>
              <img
                src="skills.png"
                alt="skills icon"
              />
            </div>
          </li>
          {/*           <li className={styles.projects}>
            <div className={styles.iconWrapper}>
              <img
                src="projects.png"
                alt="projects icon"
              />
            </div>
          </li> */}
          <li className={styles.contact}>
            <div className={styles.iconWrapper}>
              <img
                src="contact.png"
                alt="contact icon"
              />
            </div>
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
