/**
 * Write a function which returns a function to replace forbidden words in string by * symbols
 * Array 'forbidden' is specifying the words you have to detect and replace by *
 * Amount of * symbols should be equal word length (words and spaces between them if there are many words)
 *
 * ATTENTION: There might be one or several symbols '\n' or '\\n'.
 * That's a special symbol declaring a new line and should stay in a final string.
 *
 * Example:
 * forbidden = ['ship', 'blow', 'blew up']
 * str = 'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'
 * str = 'There once was a **** that put to sea\nThe name of the **** was the Billy of Tea\nThe winds *******, her bow dipped down\nOh ****, my bully boys, **** (huh)'
 * @param {Array} forbidden
 * @returns {function}
 */
module.exports.censorship = function censorship(forbidden) {
  return function (str) {
    let result = '';
    let temp = '';
    let isSuccess;
    let x;
    let secsessful; // обьявление перменных

    for (let i = 0, len = str.length; i < len; i++) { // перебирает буквы str
      secsessful = false;

      for (let j = 0; j < forbidden.length; j++) { // перебирают forbiden j(масив строк) и k(буквы каждой строки)
          const firstValue =  0;
          isSuccess = false;

          if (str[i] === forbidden[j][firstValue]){ // сравнивает букву из str с каждой первой буквой каждого эллемента масива forbiden
            temp = '';
            x = i; // для момента когда первая буква совподает а остальные нет, дабы не скипать букввы str

            for (let k2 = 0; k2 < forbidden[j].length; k2++) { // перебирает буквы эллементов forbiden полностью
              if (str[x] === forbidden[j][k2]){ // набирает темп для строки
                temp += '*';
                x++;
              }

              if (temp.length === forbidden[j].length){ // проверяет успешно ли нахождение строки
                isSuccess = true;
              }
            }


            if (isSuccess === true && temp.length > 1){ // если да то добовляет в резалт темп
              result += temp;
              i += temp.length - 1;
              secsessful = true;
            }
            if (isSuccess === true && temp.length === 1){ // для значений равных единице
              result += temp;
              secsessful = true;
            }
          }
      }

      if (secsessful === false){ // если нет то символ
        result += str[i];
      }
    }

    return result;
  }
};