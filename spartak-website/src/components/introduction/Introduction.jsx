import styles from './Introduction.module.css';

export function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.introContainer}>
        <div className={styles.introTextContainer}>
          <img
            className={styles.introText}
            src="intro-text-drawn.png"
            alt="I am Spartak, a frontend developer based in Oslo"
          />
        </div>
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
      <div className={styles.avatarImageContainer}>
        <img
          className={styles.avatarImage}
          src="avatar-white.png"
          alt="Avatar of Spartak"
        />
      </div>
    </div>
  );
}
