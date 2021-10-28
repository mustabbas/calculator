import operate from '../logic/operate.js';
import calculate from '../logic/calculate.js';

describe('test for logic of operate', () => {
  test('Display the Addition of 2 number ', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });
  test('Display the Subtraction of 2 number ', () => {
    expect(operate(5, 1, '-')).toBe('4');
  });
  test('Display the Multiplication of 2 number ', () => {
    expect(operate(5, 1, 'x')).toBe('5');
  });
  test('Display the Division of 2 number ', () => {
    expect(operate(5, 1, '÷')).toBe('5');
  });
});

describe('test for logic of calculate', () => {
  test('Display the defualt value of calculator', () => {
    expect(calculate({ total: 0, next: 0, operation: '' }, 'AC')).toStrictEqual({ next: null, operation: null, total: null });
  });
  test('Display 2 number without operation', () => {
    expect(calculate({ total: null, next: 5, operation: '' }, '0')).toStrictEqual({ next: '50', total: null });
  });
  test('Display 1 number with operation', () => {
    expect(calculate({ total: null, next: 5, operation: '' }, '+')).toStrictEqual({ next: null, operation: '+', total: 5 });
  });
  test('Display negative number', () => {
    expect(calculate({ total: null, next: 5, operation: '' }, '+/-')).toStrictEqual({ next: '-5', operation: '', total: null });
  });
  test('Display number with dot', () => {
    expect(calculate({ total: null, next: '5.', operation: '' }, '.')).toStrictEqual({ next: '5.', operation: '', total: null });
  });
  test('Display sum of 2 number ', () => {
    expect(calculate({ total: 2, next: 4, operation: '+' }, '=')).toStrictEqual({ next: null, operation: null, total: '6' });
  });
});