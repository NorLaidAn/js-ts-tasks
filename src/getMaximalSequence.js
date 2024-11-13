/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let result = [];
  let maxSequence = 0;
  let temp = 1; // temp - для нахождения сиквенса разных иттераций
  let num;        // инициализация перменных

  for (let i = 0; i < arr.length; i++) { // перебор эллементов массива arr
    if(arr[i] === arr[i + 1]) { // сравнение эллементов
      temp++; // нахождение сиквенса текущей иттерации
    }
    else{
      if(maxSequence < temp) {
        maxSequence = temp; // присвоение макс сиквенса
        num = arr[i]; // значение пренадлежащее этому макс сиквенсу
      }
      temp = 1; // обнуления сиквенса с началом новой итерации
    }
  }

  for(let i = 0; i < maxSequence; i++) { // зная мак длинну и значение создает нужный масив  для проверки
    result.push(num);
  }

  return result;
};
