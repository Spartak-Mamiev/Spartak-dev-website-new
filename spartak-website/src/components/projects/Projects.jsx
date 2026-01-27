import { useState } from 'react';
import styles from './Projects.module.css';
import nine from '/public/calculator/9.png';
import eight from '/public/calculator/8.png';
import seven from '/calculator/7.png';
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
  const [displayValue, setDisplayValue] = useState('');

  const appendValue = (value) => {
    setDisplayValue((prev) => prev + value);
  };

  const handleDelete = () => {
    setDisplayValue((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleCalculate = () => {
    try {
      const expression = displayValue.replace(',', '.');
      const result = Function(`return ${expression}`)();
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div>
      <div className={styles.displayContainer}>
        <input
          className={styles.display}
          value={displayValue}
          readOnly
        />
      </div>

      <div className={styles.digits}>
        <div>
          <button
            className={styles.sevenBtn}
            onClick={() => appendValue('7')}
          />
          <button
            className={styles.eightBtn}
            onClick={() => appendValue('8')}
          />
          <button
            className={styles.nineBtn}
            onClick={() => appendValue('9')}
          />
          <button
            className={styles.deleteBtn}
            onClick={handleDelete}
          />
        </div>

        <div>
          <button
            className={styles.fourBtn}
            onClick={() => appendValue('4')}
          />
          <button
            className={styles.fiveBtn}
            onClick={() => appendValue('5')}
          />
          <button
            className={styles.sixBtn}
            onClick={() => appendValue('6')}
          />
          <button
            className={styles.plusBtn}
            onClick={() => appendValue('+')}
          />
        </div>

        <div>
          <button
            className={styles.oneBtn}
            onClick={() => appendValue('1')}
          />
          <button
            className={styles.twoBtn}
            onClick={() => appendValue('2')}
          />
          <button
            className={styles.threeBtn}
            onClick={() => appendValue('3')}
          />
          <button
            className={styles.minusBtn}
            onClick={() => appendValue('-')}
          />
        </div>

        <div>
          <button
            className={styles.comaBtn}
            onClick={() => appendValue('.')}
          />
          <button
            className={styles.zeroBtn}
            onClick={() => appendValue('0')}
          />
          <button
            className={styles.divideBtn}
            onClick={() => appendValue('/')}
          />
          <button
            className={styles.multiplyBtn}
            onClick={() => appendValue('*')}
          />
        </div>

        <div>
          <button
            className={styles.cancelBtn}
            onClick={handleClear}
          />
          <button
            className={styles.equalBtn}
            onClick={handleCalculate}
          />
        </div>
      </div>
    </div>
  );
}
