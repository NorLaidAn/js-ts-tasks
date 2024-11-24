/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function transformer(str) {
    str = str.replaceAll(/[^a-zA-Z0-9]/g, ''); // я загуглил такую интересную вещь как a-z A-Z 0-9, означают все символы от такого до такого, /g - нужен для реплейса не 1 значения в строке а всех , а ещё узнал что для глобальной замены не пойдет метод replaceAll()
    str = str.toLowerCase();

    for (var i = 0; i < (str.length / 2); i++) {
      if(str[i] !==  str[(str.length - 1) - i]) {
        return false;
      }
    }
    return true;
  }
};
