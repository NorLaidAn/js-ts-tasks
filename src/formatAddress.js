/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function formatter(object) {
    let result = '';

    for (let key in object) {
      if(key === 'country'){ // последний кей для запятой
        result += object[key];
      }
      else{
        result += object[key] + ', ';
      }
    }

    return result;
  }
};
