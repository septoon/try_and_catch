import getNumber from '../src/js/getNumber';


test('should be a number', () => {
  const result = parseInt('50', 10);
  expect(result).not.toBeNaN();
});

test('throw', () => {
  expect(() => {
    isNaN(result);
  }).toThrow();
});
