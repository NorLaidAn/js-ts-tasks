/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  let additionalString = '';
  const len = str.length;

  if(symbolsCount > len) {
    return str;
  }

  for (let i = 0; i < symbolsCount; i++) {
    additionalString = `${str[len - (i + 1)]}${additionalString}`;
  }
  return `${additionalString}${str}${additionalString}`;
};
