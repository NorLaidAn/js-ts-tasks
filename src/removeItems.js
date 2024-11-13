/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  for(let i = 0; i < arr.length; i++) { // дабы пробежаться по arr
    if(JSON.stringify(arr[i]) === JSON.stringify(value)){ // подсмотрел прикольную функцию которая преобразовывает значения обьектов в строки json (я без понятия как еще мне сравнить значения обьектов и что такое json)
      arr.splice(i, 1) // удаление эллемента
      i--; // т.к эллемент удаляется надо вернуться на 1 шаг назад ведь все значения сместились
    }
  }

  return arr;
};
