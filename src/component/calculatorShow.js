import React from 'react';

const CalculatorShow = (props) => {
  const showValue = () => {
    const calculator = props.calculateResult;
    if (calculator.next) {
      return calculator.next;
    }
    if (calculator.total) {
      return calculator.total;
    }
    return 0;
  };
  return (
    <thead>
      <tr>
      <th colspan="4">{showValue()}</th>
      </tr>
    </thead>
  );
};

export default CalculatorShow;
