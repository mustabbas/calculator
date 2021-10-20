import React from 'react';
import CalculatorShow from './calculatorShow';
import CalculatorBtn from './calculatorBtn';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
  }

  eventHandler(event) {
    const resutl = calculate(this.state, event);
    this.setState(resutl);
  }

  render() {
    const calculateRes = this.state;
    return (
    <div className = "table-wrapper">
      <table>
        <CalculatorShow calculateResult = {calculateRes} />
        <CalculatorBtn eventHandler={this.eventHandler}/>
      </table>
    </div>
    );
  }
}

export default Calculator;