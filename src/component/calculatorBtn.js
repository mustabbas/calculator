import React from 'react';

class CalculatorBtn extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(e) {
    this.props.eventHandler(e.target.id);
  }

  render() {
    return (
        <tbody onClick = {this.eventHandler}>
            <tr>
            <td id ="AC">AC</td>
            <td id ="+/-">+/-</td>
            <td id ="%">%</td>
            <th id ="÷">÷</th>
            </tr>
            <tr>
            <td id = "7">7</td>
            <td id = "8">8</td>
            <td id ="9">9</td>
            <th id ="x">x</th>
            </tr>
            <tr>
            <td id ="4">4</td>
            <td id ="5">5</td>
            <td id ="6">6</td>
            <th id ="-">-</th>
            </tr>
            <tr>
            <td id ="1">1</td>
            <td id ="2">2</td>
            <td id ="3">3</td>
            <th id ="+">+</th>
            </tr>
            <tr>
            <td colspan="2">0</td>
            <td id =".">.</td>
            <th id ="=">=</th>
            </tr>
        </tbody>
    );
  }
}

export default CalculatorBtn;