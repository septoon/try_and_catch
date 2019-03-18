import getNumber from '../src/js/getNumber';


test('testing numeric input, should be ok', () => {
  const input = '555';
  const makeOutput = () => getNumber(input);
  expect(makeOutput()).toBe(555);
});

test('a text input should throw an error', () => {
  const input = 'one';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});

test('a hexadecimal number should throw an error', () => {
  const input = '0xabc';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});

test('an binar number should throw an error', () => {
  const input = '0b011111111';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});

test('an octal number should throw an error', () => {
  const input = '07333';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});

test('a float should throw an error', () => {
  const input = '5.5';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});

test('zero should throw an error', () => {
  const input = '0';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});

test('a negative number should throw an error', () => {
  const input = '-5';
  const makeOutput = () => getNumber(input);
  expect(makeOutput).toThrow();
});
