import React from 'react';

class Calculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
    <div className = "table-wrapper">
      <table>
        <thead>
            <tr>
            <th colspan="4">0</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <th>÷</th>
            </tr>
            <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <th>*</th>
            </tr>
            <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <th>-</th>
            </tr>
            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <th>+</th>
            </tr>
            <tr>
            <td colspan="2">0</td>
            <td>.</td>
            <th>=</th>
            </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default Calculator;