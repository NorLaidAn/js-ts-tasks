/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (
  users: Array<{ type: 'EMPLOYEE' | 'CONTRACTOR' }>
): Record<'EMPLOYEE' | 'CONTRACTOR', Array<{ type: 'EMPLOYEE' | 'CONTRACTOR' }>> {
  const result = {
    employees: [],
    contractors: [],
  };

  users.forEach(user => {
    if (user.type === 'EMPLOYEE') {
      result.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      result.contractors.push(user);
    }
  });

  return result;
};
