import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.aboutSection}>
      <img
        className={styles.aboutHeader}
        src="about.png"
        alt="About header"
      />
      <div className={styles.about}>
        <img
          src="about-me.png"
          alt=""
        />
        <div className={styles.aboutImages}>
          <img
            className={styles.clapperImg}
            src="spartak-with-clapper-white.png"
            alt="Spartak with clapper"
          />
          <img
            className={styles.marathonImg}
            src="marathon-white.png"
            alt="Spartak with a marathon medal"
          />
          <img
            className={styles.freiaImg}
            src="freia-white.png"
            alt="Picture of a dog laying on a blanket"
          />
        </div>
      </div>
    </div>
  );
}
