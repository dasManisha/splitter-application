import React from 'react';
import { IProps } from './types';
import styles from './TipButton.module.css';

const TipButton = ({
  children,
  containerStyle,
  handleTipSelected,
  tip,
  value,
}: IProps) => {
  const selectTip = (value: string) => {
    return value === tip
      ? ` ${styles.wrapper} ${styles.wrapperActive}`
      : styles.wrapper;
  };
  return (
    <button
      className={selectTip(value)}
      style={containerStyle}
      onClick={() => handleTipSelected(value)}
    >
      {children}
    </button>
  );
};

export default TipButton;
