import { getNumber } from '../src/js/app';


test('should be a number', () => {

  expect(result).not.toBeNaN();
});

test('throw', () => {
  expect(() => {
    isNaN(result);
  }).toThrow();
});
