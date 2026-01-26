import styles from './Projects.module.css';
import nine from '/public/calculator/9.png';
import eight from '/public/calculator/8.png';
import seven from '/public/calculator/7.png';
import six from '/public/calculator/6.png';
import five from '/public/calculator/5.png';
import four from '/public/calculator/4.png';
import three from '/public/calculator/3.png';
import two from '/public/calculator/2.png';
import one from '/public/calculator/1.png';
import zero from '/public/calculator/0.png';
import plus from '/public/calculator/plus.png';
import minus from '/public/calculator/minus.png';
import multiply from '/public/calculator/multiply.png';
import divide from '/public/calculator/divide.png';
import equal from '/public/calculator/equal.png';
import coma from '/public/calculator/coma.png';
import deleteBtn from '/public/calculator/delete.png';
import cancel from '/public/calculator/cancel.png';
/* import display from '/public/calculator/display.png'; */

export function Projects() {
  return (
    <div>
      <div className={styles.displayContainer}>
        <p className={styles.display}></p>
        {/*    <img
          className={styles.display}
          src={display}
          alt="display"
        /> */}
      </div>
      <div className={styles.digits}>
        <div>
          <button
            className={styles.sevenBtn}
            value="7"
          ></button>

          <button
            className={styles.eightBtn}
            value="8"
          ></button>

          <button
            className={styles.nineBtn}
            value="9"
          ></button>

          <button className={styles.deleteBtn}></button>
        </div>
        <div>
          <button
            className={styles.fourBtn}
            value="4"
          ></button>

          <button
            className={styles.fiveBtn}
            value="5"
          ></button>

          <button
            className={styles.sixBtn}
            value="6"
          ></button>

          <button className={styles.plusBtn}></button>
        </div>
        <div>
          <button
            className={styles.oneBtn}
            value="1"
          ></button>

          <button
            className={styles.twoBtn}
            value="2"
          ></button>

          <button
            className={styles.threeBtn}
            value="3"
          ></button>

          <button className={styles.minusBtn}></button>
        </div>
        <div>
          <button className={styles.comaBtn}></button>

          <button
            className={styles.zeroBtn}
            value="0"
          ></button>

          <button className={styles.divideBtn}></button>

          <button className={styles.multiplyBtn}></button>
        </div>
        <div>
          <button className={styles.cancelBtn}></button>

          <button className={styles.equalBtn}></button>
        </div>
      </div>
    </div>

    /*     <div className={styles.projectsSection}>
      <img
        src="projects.png"
        alt=""
      />
      <div className={styles.projects}>
        <div className={styles.project}>
          <img
            className={styles.projectLabel}
            src={ecomLable}
            alt="E-commerce Project label"
          />
          <img
            className={styles.projectImage}
            src="ecommerce-image-widescreen.png"
            alt="
          E-commerce Project image"
          />
        </div>
        <div className={styles.project}>
          <img
            className={styles.projectLabel}
            src="calculator-app-label.png"
            alt="Calculator Project label"
          />
          <img
            className={styles.projectImage}
            src="calculator-screen-shot.png"
            alt="Calculator Project"
          />
        </div>
      </div>
    </div> */
  );
}
