import React from 'react';

class CalculatorShow extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  showValue() {
    const calculator = this.props.calculateResult;
    if (calculator.next) {
      return calculator.next;
    }
    if (calculator.total) {
      return calculator.total;
    }
    return 0;
  }

  render() {
    return (
        <thead>
            <tr>
            <th colspan="4">{this.showValue()}</th>
            </tr>
        </thead>
    );
  }
}

export default CalculatorShow;