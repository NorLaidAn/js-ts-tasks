/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let result = 0;
  if (start < end){
    for (let i = start; i <= end; i++) {
      result += parseInt(i, 10);
    }
  }
  else{
    for (let i = end; i <= start; i++) {
      result += parseInt(i, 10);
    }
  }

  return result;
};
