import { getNumber } from '../src/js/app';


test('should be a number', () => {
  const result = parseInt("50");
  expect(result).not.toBeNaN();
});

test('throw', () => {
  expect(() => {
    isNaN(result);
  }).toThrow();
});
