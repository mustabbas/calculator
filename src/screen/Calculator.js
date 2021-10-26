import React, { useState } from 'react';
import CalculatorShow from '../component/calculatorShow.js';
import CalculatorBtn from '../component/calculatorBtn.js';
import calculate from '../logic/calculate.js';

const Calculator = () => {
  const [data, setData] = useState({ total: 0, next: 0, operation: '' });

  const eventHandler = (event) => {
    const resutl = calculate(data, event);
    setData(resutl);
  };

  return (
    <div className = "table-wrapper">
      <h1>Let's do some Math !</h1>
      <table>
        <CalculatorShow calculateResult = {data} />
        <CalculatorBtn eventHandler={eventHandler}/>
      </table>
    </div>
  );
};

export default Calculator;