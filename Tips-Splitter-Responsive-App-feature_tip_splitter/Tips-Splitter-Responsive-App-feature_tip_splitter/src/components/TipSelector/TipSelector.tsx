import React from 'react';
import { IProps } from './types';
import styles from './TipSelector.module.css';
import TipButton from '../TipButton/TipButton';
import TipCustom from '../TipCustom';
const TipSelector = ({
  label,
  handleTipSelect,
  handleCustomTip,
  customTip,
  tip,
}: IProps) => {
  const tipValue = ['5', '10', '15', '25', '50'];
  return (
    <div>
      <label className={styles.labelContainer}>Select Tip %</label>

      <div className={styles.wrapper}>
        {tipValue.map((tipText, index) => {
          return (
            <TipButton
              key={index}
              value={tipText}
              handleTipSelected={handleTipSelect}
              containerStyle={{}}
              tip={tip}
            >
              {tipText}%
            </TipButton>
          );
        })}
        <TipCustom
          customTip={customTip}
          handleCustomTip={handleCustomTip}
        ></TipCustom>
      </div>
    </div>
  );
};

export default TipSelector;
