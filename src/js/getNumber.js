const getNumber = (number) => {
  number = prompt('your number');
  const result = parseInt(number, 10);
  try {
    if (Number.isNaN(result)) {
      throw 'Error';
    }
  } catch (e) {
    throw "It's not a number";
  }
  return result;
};

export default getNumber;
