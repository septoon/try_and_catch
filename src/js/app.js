const number = prompt('your number');

export const getNumber = () => {
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

