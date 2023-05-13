import React from 'react';
import { IProps } from './types';
import styles from './TipInputWrapper.module.css';
import InputTextField from '../InputTextField';
import TipSelector from '../TipSelector';
import dollar from '../assests/dollar.svg';
import person from '../assests/person.svg';

const TipInputWrapper = ({
  bill,
  people,
  tip,
  handleInputBill,
  handleInputPeople,
  handleTipSelect,
  handleCustomTip,
  customTip,
  errorBill,
  errorPeople,
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <InputTextField
        label="Bill"
        containerStyle={{}}
        textStyle={{}}
        error={errorBill}
        image={dollar}
        bill={bill}
        handleInputBill={handleInputBill}
      />

      <TipSelector
        label={''}
        handleTipSelect={handleTipSelect}
        handleCustomTip={handleCustomTip}
        customTip={customTip}
        tip={tip}
      />
      <InputTextField
        label="People"
        containerStyle={{}}
        textStyle={{}}
        error={errorPeople}
        image={person}
        bill={people}
        handleInputBill={handleInputPeople}
      />
    </div>
  );
};

export default TipInputWrapper;
