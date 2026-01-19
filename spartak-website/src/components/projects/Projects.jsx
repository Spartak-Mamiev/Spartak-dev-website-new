import { useState } from 'react';
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
import display from '/public/calculator/display.png';

export function Projects() {
  return (
    <div>
      <div className={styles.displayContainer}>
        <img
          className={styles.display}
          src={display}
          alt="display"
        />
      </div>
      <div className={styles.digits}>
        <div>
          <img
            src={seven}
            alt="7"
            value="7"
          />

          <img
            src={eight}
            alt="8"
            value="8"
          />
          <img
            src={nine}
            alt="9"
            value="9"
          />
          <img
            src={deleteBtn}
            alt="delete"
          />
        </div>
        <div>
          <img
            src={four}
            alt="4"
          />
          <img
            src={five}
            alt="5"
          />
          <img
            src={six}
            alt="6"
          />
          <img
            src={plus}
            alt="plus"
          />
        </div>
        <div>
          <img
            src={one}
            alt="1"
          />
          <img
            src={two}
            alt="2"
          />
          <img
            src={three}
            alt="3"
          />
          <img
            src={minus}
            alt="minus"
          />
        </div>
        <div>
          <img
            src={coma}
            alt="coma"
          />
          <img
            src={zero}
            alt="0"
          />
          <img
            src={divide}
            alt="divide"
          />
          <img
            src={multiply}
            alt="multiply"
          />
        </div>
        <div>
          <img
            src={cancel}
            alt="cancel"
          />
          <img
            src={equal}
            alt="equal"
          />
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
