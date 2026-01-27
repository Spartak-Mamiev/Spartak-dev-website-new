import styles from './Introduction.module.css';

import introText from '/intro-text-drawn.png';
import contactBtn from '/contact-me-btn.png';
import projectsBtn from '/my-projects-btn.png';
import avatar from '/Untitled_Artwork 28.png';

export function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.introContainer}>
        <div className={styles.introTextContainer}>
          <img
            className={styles.introText}
            src={introText}
            alt="I am Spartak, a frontend developer based in Oslo"
          />
        </div>
        <div className={styles.introCtaButtons}>
          <button className={styles.contactMeBtn}>
            <img
              src={contactBtn}
              alt="Contact me button"
            />
          </button>
          <button className={styles.myProjectsBtn}>
            <img
              src={projectsBtn}
              alt="My projects button"
            />
          </button>
        </div>
      </div>
      <div className={styles.avatarImageContainer}>
        <img
          className={styles.avatarImage}
          src={avatar}
          alt="Avatar of Spartak"
        />
      </div>
    </div>
  );
}
