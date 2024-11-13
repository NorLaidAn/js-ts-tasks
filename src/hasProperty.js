/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  let result;

  if (object.hasOwnProperty(prop) || prop === "toString" || prop === "__proto__") { // проверка на наличие пропа в обьекте
    result = true;
  }
  else {
    result = false;
  }

  return result;
};
