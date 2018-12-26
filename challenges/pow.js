/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // special case: base and power are not a number
  if (typeof base !== 'number' && typeof power !== 'number') return undefined;
  // base case: power === 0
  if (power === 1) return base;
  // recurse passing in base and power - 1
  return base * pow(base, power - 1);
}

console.log(pow(2, 3)); // 2^3 = 8;

module.exports = pow;
