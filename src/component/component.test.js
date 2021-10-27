import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalculatorBtn from './calculatorBtn.js';

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