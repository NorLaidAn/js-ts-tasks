/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'string') {
    firstNumber = parseInt(firstNumber.replaceAll(' ',''), 10);
  }
  if (typeof secondNumber === 'string') {
    secondNumber = parseInt(secondNumber.replaceAll(' ',''), 10);
  }

  return firstNumber + secondNumber;
};
