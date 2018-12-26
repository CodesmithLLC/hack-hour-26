/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // special case: base and power are not a number
  if (typeof base !== 'number' && typeof power !== 'number') return undefined;
  //  if power is 0
  if (power === 0) return 1;
  if (power === -1) return 1 / base;
  if (power * base === base) return base;
  if (power < 0) return  pow(base, power + 1) / base;
  if (power > 0) return base * pow(base, power - 1);
  // recurse passing in base and power - 1
}

console.log(pow(2, -3)); // 2^3 = 8; 2^-3 = 0.125

module.exports = pow;
