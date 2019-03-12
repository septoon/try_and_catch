// import { getNumber } from '../src/js/app';


const getNumber = () => {
  try {
    const result = parseInt(number);
    if (isNaN(result)) {
      throw new SyntaxError('Error');
    }
    console.log(result);
  } catch (e) {
    console.error("It's not a number");
  }
};


test('should be a number', () => {

  expect(result).not.toBeNaN();
});

test('throw', () => {
  expect(() => {
    isNaN(result);
  }).toThrow();
});




// export const getNumber = (a, b) => {
//   return a + b;
// }


// test("add", () => {
//   expect(2 + 2).toBe(4);

// });