/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // guard clause 1 - if base === 0 && power === 0, return undefined;
  if (base === 0 && power === 0) return undefined;
  // guard clause 2 - if base === 0, return 0;
  if (base === 0) return 0;
  // guard clause 3 - if power === 0, return 1;
  if (power === 0) return 1;
  // base case - if power === 1, return base * power
  if (power === 1) return base * power;
  // else recursively call base * pow(base * power - 1)
  return base * pow(base, power -= 1);
};

console.log(pow(2, 3));
console.log(pow(4, 8));

module.exports = pow;
// COMPLETED