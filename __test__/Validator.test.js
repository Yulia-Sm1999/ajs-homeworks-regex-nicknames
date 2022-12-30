import Validator from '../src/Validator';

test('should approve username', () => {
  const result = new Validator('sd2df242s').validateUsername();
  const expected = 'Имя валидно';
  expect(result).toBe(expected);
});

test('should approve username', () => {
  const result = new Validator('ss').validateUsername();
  const expected = 'Имя валидно';
  expect(result).toBe(expected);
});

test('should approve username', () => {
  const result = new Validator('s___875----999___s').validateUsername();
  const expected = 'Имя валидно';
  expect(result).toBe(expected);
});

test('should not approve username', () => {
  const result = new Validator('2').validateUsername();
  const expected = 'Имя НЕ валидно!';
  expect(result).toBe(expected);
});

test('should not approve username', () => {
  const result = new Validator('2dg___00000_9').validateUsername();
  const expected = 'Имя НЕ валидно!';
  expect(result).toBe(expected);
});

test('should not approve username', () => {
  const result = new Validator('').validateUsername();
  const expected = 'Имя НЕ валидно!';
  expect(result).toBe(expected);
});

test('should not approve username', () => {
  const result = new Validator('52637849502').validateUsername();
  const expected = 'Имя НЕ валидно!';
  expect(result).toBe(expected);
});
