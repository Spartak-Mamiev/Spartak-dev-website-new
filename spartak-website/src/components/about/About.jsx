import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.leftSide}>
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
      <div className={styles.rightSide}>
        <img
          className={styles.clapperImg}
          src="spartak-with-clapper-white.png"
          alt="Spartak with clapper"
        />
      </div>
    </div>
  );
}
