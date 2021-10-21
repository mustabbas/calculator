import React, { useState } from 'react';
import CalculatorShow from './calculatorShow';
import CalculatorBtn from './calculatorBtn';
import calculate from '../logic/calculate.js';

const Calculator = () => {
  const [data, setData] = useState({ total: 0, next: 0, operation: '' });

  const eventHandler = (event) => {
    const resutl = calculate(data, event);
    setData(resutl);
  };

  return (
    <div className = "table-wrapper">
      <table>
        <CalculatorShow calculateResult = {data} />
        <CalculatorBtn eventHandler={eventHandler}/>
      </table>
    </div>
  );
};

export default Calculator;