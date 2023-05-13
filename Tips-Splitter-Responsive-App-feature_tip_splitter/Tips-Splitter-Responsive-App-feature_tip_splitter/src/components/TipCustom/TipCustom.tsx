import React from 'react';
import { IProps } from './types';
import styles from './TipCustom.module.css';

const TipCustom = ({ customTip, handleCustomTip }: IProps) => {
  return (
    <input
      className={styles.wrapper}
      placeholder="Custom"
      type="number"
      value={customTip}
      onChange={(e) => handleCustomTip(e.target.value)}
    ></input>
  );
};

export default TipCustom;
