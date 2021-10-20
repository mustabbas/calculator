import React from 'react';
import './App.css';

import Calculator from './component/Calculator.js';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
