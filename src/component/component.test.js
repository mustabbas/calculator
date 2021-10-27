import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalculatorBtn from './calculatorBtn.js';
import CalculatorShow from './calculatorShow.js';
import Header from './Header.js';

describe('test for calculator button component', () => {
  test('the screen content AC', () => {
    render(<CalculatorBtn />);
    expect(screen.getByText(/AC/)).toBeInTheDocument();
  });
  test('the screen content AC', () => {
    render(<CalculatorBtn />);
    expect(screen.getByText('7'));
  });
});

describe('test for calculator show component', () => {
  test('Displays the correct total', () => {
    render(<CalculatorShow calculateResult={{ total: 0, next: 0, operation: '' }}/>);
    expect(screen.getByText('0'));
  });
  test('Displays the correct key when pressed', () => {
    render(<CalculatorShow calculateResult={{ total: 5, next: 0, operation: '' }}/>);
    expect(screen.getByText('5'));
  });
});

describe('test for header component', () => {
  test('Displays the correct header title', () => {
    render(<Router><Header/></Router>);
    expect(screen.getByText('Math Magicians'));
  });
  test('Displays the correct nav items', () => {
    render(<Router><Header/></Router>);
    expect(screen.getByText('Calculator'));
  });
});
