/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {string}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  const result = (r**2 / 3) * h * Math.PI;

  return result.toFixed(2);
};
