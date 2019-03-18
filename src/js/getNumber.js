const getNumber = (number) => {
  const result = parseInt(number, 10);
  if (Number.isNaN(result) || result % 1 > 0 || result <= 0) {
    throw new Error('Error');
  } else { return result; }
};

export default getNumber;
