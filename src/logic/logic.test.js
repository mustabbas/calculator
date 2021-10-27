import operate from './operate.js';
import calculate from './calculate.js';

describe('test for logic of operate', () => {
  test('Display the Addition of 2 number ', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });
  test('Display the Subtraction of 2 number ', () => {
    expect(operate(5, 1, '-')).toBe('4');
  });
});

describe('test for logic of calculate', () => {
  test('Display the defualt value of calculator', () => {
    expect(calculate({ total: 0, next: 0, operation: '' }, 'AC')).toStrictEqual({ next: null, operation: null, total: null });
  });
  test('Display the defualt value of calculator', () => {
    expect(calculate({ total: 2, next: 4, operation: '+' }, '=')).toStrictEqual({ next: null, operation: null, total: '6' });
  });
});