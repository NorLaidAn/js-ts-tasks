/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {


  /*
  let result = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let temp = false;
      if (str1[i] === str2[j] && str1[i + 1] === str2[j + 1]) {
        result += str1[i];
        i++;
        temp = true;
      }
      if(temp === false && (str1[i] === str2[j] && str1[i - 1] === str2[j - 1]) ){
        result += str1[i];
      }
    }
  }
 */ // старый вариант кода (почти работает, не проходит 1 проверку и не совпадает всего 1 буква)


  let result = '';
  let temp = ''; // инциализация перменных

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) { // для перебора str1 и str2

      if (str1[i] === str2[j]) { // накапливаем совпадения, если символы равны
        let k = 0;

        while (str1[i + k] && str1[i + k] === str2[j + k]) { // Сравниваем последующие символы до тех пор пока они совпадают
          temp += str1[i + k];
          k++;
        }

        if (temp.length > result.length) { // обновляем result с условием
          result = temp;
        }

        temp = ''; // обнуляем для след итерации
      }
    }
  }

  return result;
};
