/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function Formater(object) {
    let result = '';
    let counter = 0;
    const start = 0;

    for (let key1 in order) {
      for (let key2 in object) {

        if(order[key1] === key2) {
          if(counter === start) { // проврка для запятой
            result += object[key2];
            counter += 1;
          }
          else{
            result += `, ${object[key2]}`;
            counter += 1;
          }
        }
      }
    }

    return result;
  }
};
