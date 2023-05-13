import React from 'react';
import TipInputWrapper from '../TipInputWrapper';
import TipDisplay from '../TipDisplay';
import { IProps } from './types';
import styles from './TipCalculator.module.css';

const TipCalculator = (props: IProps) => {
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [customTip, setCustomTip] = React.useState('');

  // handle reset for all the states
  function handleReset() {
    setBill('');
    setPeople('');
    setTip('');
    setCustomTip('');
  }

  // handle tip selection
  function handleTipSelect(value: string) {
    setTip(value);
  }

  function handleCustomTip(value: string) {
    setTip(value);
    setCustomTip(value);
  }

  // handle input bill
  function handleInputBill(value: string) {
    setBill(value);
  }

  // handle input people
  function handleInputPeople(value: string) {
    setPeople(value);
  }

  const handleBillError = () => (bill === '0' ? "can't be zero" : null);
  const handlePeopleError = () => (people === '0' ? "can't be zero" : null);

  const errorBill = handleBillError();
  const errorPeople = handlePeopleError();

  // Calculate tip and total per person Logic
  let tipPerPerson = '0.00';
  let totalPerPerson = '0.00';
  if (bill > '0 ' && people > '0' && tip > '0') {
    const tipCalucation = (Number(bill) * Number(tip)) / 100;
    tipPerPerson = (tipCalucation / Number(people)).toString();
    tipPerPerson = parseFloat(tipPerPerson).toFixed(2);

    const totalCalucation = Number(bill) + tipCalucation;
    totalPerPerson = (totalCalucation / Number(people)).toString();
    totalPerPerson = parseFloat(totalPerPerson).toFixed(2);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.splitterName}>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className={styles.splitterContainer}>
        <TipInputWrapper
          bill={bill}
          people={people}
          handleInputBill={handleInputBill}
          handleInputPeople={handleInputPeople}
          tip={tip}
          handleTipSelect={handleTipSelect}
          handleCustomTip={handleCustomTip}
          customTip={customTip}
          errorBill={errorBill}
          errorPeople={errorPeople}
        />
        <TipDisplay
          total={totalPerPerson}
          handleReset={handleReset}
          tipPerPerson={tipPerPerson}
          bill={bill}
        />
      </div>
    </div>
  );
};

export default TipCalculator;
