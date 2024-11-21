/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function allPrimeBetweenTwo(start, end) {
    let result = [];
    let temp;

    for (let i = start; i <= end; i++) { // цыкл для перебора значений от начала до конца
      temp = true;

      for (let j = 2; j < i; j++) { // цикл для деления данного числа от 2 до самого числа
        if (i % j === 0){ // проверка на делимость от 2 до числа - 1
          temp = false;
          break;
        }
      }

      if (temp === true){ // если число не делилось без остатка то добовляет в масив
        result.push(i);
      }
    }
    return result;
  }
};
