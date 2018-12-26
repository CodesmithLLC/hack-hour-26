/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power > 0) {
    power -= 1;
    if (power === 0) {
      return base;
    }
    return base * pow(base, power);
  }
  if (power < 0) {
    power += 1;
    if (power === 0) {
      return 1 / base;
    }
    return 1 / base * pow(base, power);
  }
}

module.exports = pow;
