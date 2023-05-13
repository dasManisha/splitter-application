import React from 'react';
import { IProps } from './types';
import styles from './TipDisplay.module.css';

const TipDisplay = ({ tipPerPerson, total, handleReset, bill }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.displayContainer}>
        <div className={styles.tipContainer}>
          <div className={styles.tipDisplay}>
            <span>Tip Amount</span>
            <p>/ person</p>
          </div>
          <div className={styles.unit}>
            <span>${tipPerPerson}</span>
          </div>
        </div>
        <div className={styles.tipContainer}>
          <div className={styles.tipDisplay}>
            <span>Total</span>
            <p>/ person</p>
          </div>
          <div className={styles.unit}>
            <span>${total}</span>
          </div>
        </div>
      </div>

      <div className={styles.resetButton}>
        <button
          onClick={() => handleReset()}
          className={
            bill === '' ? `${styles.btn} ${styles.disable}` : `${styles.btn}`
          }
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipDisplay;
