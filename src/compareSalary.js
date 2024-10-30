/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let max; let min;
  if(firstSalary > secondSalary && firstSalary > thirdSalary) {
    max = firstSalary;
    secondSalary > thirdSalary ? min = thirdSalary : min = secondSalary;
  }
  if(firstSalary < secondSalary && secondSalary > thirdSalary){
    max = secondSalary;
    firstSalary > thirdSalary ? min = thirdSalary : min = firstSalary;
  }
  else{
    max = thirdSalary;
    firstSalary > secondSalary ? min = secondSalary : min = firstSalary;
  }
  return max - min;
};
