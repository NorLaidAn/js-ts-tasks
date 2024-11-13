/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {

  let uniqueArr = [];
  let result = 0;
  let rezBool; // инициализация переменных

  for (let i = 0; i < arr.length; i++) { // цикл для перебора значений из arr

    rezBool = true;

    for (let j = 0; j < uniqueArr.length; j++) { // цикл для проверки на повторение в доп массиве

      if (uniqueArr[j] === arr[i]) {
        rezBool = false;
        break;
      }
    }

    if (rezBool) { // условие поподания значения в доп массив
      uniqueArr.push(arr[i]);
      result++;
    }
  }
  return result;
};
