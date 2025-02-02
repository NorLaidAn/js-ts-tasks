/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let currentDate: Date;

  if (typeof targetDate === 'string') {
    const [day, month, year]: number[] = targetDate.split('.').map(Number);
    currentDate = new Date(year, month - 1, day);
  } else {
    currentDate = targetDate;
  }

  const nextNewYear = new Date(2024, 0, 1);

  const timeDifference = nextNewYear.getTime() - currentDate.getTime();

  return Math.floor(timeDifference / (1000 * 3600 * 24));
};
