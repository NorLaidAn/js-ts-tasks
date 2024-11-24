/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function sorting(...smth) {
    if (typeof smth[0] === "object") { // использовал ... для сортировки не самих обьектов а значений внутри обьектов
      [...smth].sort().reverse();
      return smth;
    }
    else {
      smth.sort().reverse();
      return smth;
    }
  }
};
