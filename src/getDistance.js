/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const xDistance = firstPoint.X - secondPoint.X; // расстояние по x
  const yDistance = firstPoint.Y - secondPoint.Y; // расстояние по y
  
  return (Math.sqrt((xDistance ** 2) + (yDistance ** 2))).toFixed(2); // теорема пифогора с 2 знаками после запятой
};
