import styles from './Introduction.module.css';

export function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.introContainer}>
        <img
          className={styles.introText}
          src="intro-text-drawn.png"
          alt="I am Spartak, a frontend developer based in Oslo"
        />
        <div className={styles.introCtaButtons}>
          <button className={styles.contactMeBtn}>
            <img
              src="contact-me-btn.png"
              alt="Contact me button"
            />
          </button>
          <button className={styles.myProjectsBtn}>
            <img
              src="my-projects-btn.png"
              alt="My projects button"
            />
          </button>
        </div>
      </div>
      <img
        className={styles.avatarImage}
        src="avatar-white.png"
        alt="Avatar of Spartak"
      />
    </div>
  );
}
