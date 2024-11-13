/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  for (let i = 0; i < arr.length; i++) {

    if(Math.abs(arr[i]) <= 9){ // если 1
      arr[i] = 1;
    }
    else if(Math.abs(arr[i]) <= 99){ // если 2
      arr[i] = 2;
    }
    else if(Math.abs(arr[i]) <= 999){ // если 3
      arr[i] = 3;
    }
    else{ // если 4
      arr[i] = 4;
    }
  }

  return arr;
};
