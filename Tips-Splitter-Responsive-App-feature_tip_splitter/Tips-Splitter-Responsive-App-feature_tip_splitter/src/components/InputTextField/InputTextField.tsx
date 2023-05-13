import React from 'react';
import cnp from 'classnames/bind';
import { IProps } from './types';
import styles from './InputTextField.module.css';
// npm install className

const cn = cnp.bind(styles);
const InputTextField = ({
  bill,
  handleInputBill,
  label,
  error,
  containerStyle,
  textStyle,
  image,
}: IProps) => {
  return (
    <div className={styles.wrapper} style={containerStyle}>
      <div className={styles.labelContainer}>
        <label
          className={cn(styles.inputLabel, styles.singleLine)}
          htmlFor="custom_text_input"
        >
          {label}
        </label>
        <span className={cn(styles.errorMessage, styles.singleLine)}>
          {error}
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={image} alt="dollar"></img>
        </div>
        <input
          className={error !== null ? styles.withError : styles.input}
          type="text"
          id="custom_text_input"
          style={textStyle}
          onChange={(e) => handleInputBill(e.target.value)}
          placeholder="0"
          value={bill}
        ></input>
      </div>
    </div>
  );
};

export default InputTextField;
