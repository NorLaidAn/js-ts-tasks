/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let result = []; // создание нового массива

  for(let i = 0, j = 0; i < arr.length; i++, j++) { // перебор эллементов массива arr

    result[j] = arr[i]; // присвоение значений массива arr в result

    if(arr[i] % 2 !== 0){ // проверка на четность для добовления 100
      result[++j] = 100;
    }
  }

  return result;
};
