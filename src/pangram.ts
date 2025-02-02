/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const strWord: string = word.toString().toLowerCase(); // Приводим к строке и нижнему регистру

  if (typeof word === 'string' && isNaN(Number(word))) {
    return hasAllLetters(strWord);
  } else {
    return hasAllDigits(strWord);
  }
};

// 1 функция
function hasAllLetters(word: string): boolean {
  let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let foundLetters: string[] = [];
  for (let char of word) {
    if (alphabet.includes(char) && !foundLetters.includes(char)) {
      foundLetters.push(char);
    }
  }

  return foundLetters.length === 26;
}

// 2 функция
function hasAllDigits(word: string): boolean {
  let digits: string[] = '0123456789'.split('');
  let foundDigits: string[] = [];
  for (let char of word) {
    if (digits.includes(char) && !foundDigits.includes(char)) {
      foundDigits.push(char);
    }
  }

  return foundDigits.length === 10;
}
