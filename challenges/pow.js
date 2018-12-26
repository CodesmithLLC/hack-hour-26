/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  const isNegative = base < 0 ? true : false;
  if (base === 0) return 0;
  if (power === 0 && base >= 0) return 1;
  if (power === 0 && base < 0) return -1;
  if (power === -1) return 1 / base;
  if (power === 1) return base;
  if (power < 0) {
    return isNegative
      ? -1 * (pow(base, power + 1) / base)
      : pow(base, power + 1) / base;
  }
  if (power > 0) {
    return isNegative
      ? -1 * base * pow(base, power - 1)
      : base * pow(base, power - 1);
  }
}

console.log(pow(-2, 7));

module.exports = pow;
