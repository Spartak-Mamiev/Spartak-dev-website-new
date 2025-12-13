import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.someLinksContainer}>
        <a
          href="https://www.instagram.com/spartak_visuals/?hl=nb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.someLink}
        >
          <img
            src="instagram-icon-drawn.png"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/spartak-mamiev-a20442161/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.someLink}
        >
          <img
            src="linkedin.png"
            alt=""
          />
        </a>
        <a
          href="https://github.com/Spartak-Mamiev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.someLink}
        >
          <img
            src="github-icon-drawn.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
}
