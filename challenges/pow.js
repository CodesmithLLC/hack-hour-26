/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {
  if (power === 0) return result;
  return pow(base, power - 1, result * base);
}

// console.log(pow(2, 0)); // should equal 1
// console.log(pow(2, 1)); // should equal 2
// console.log(pow(2, 2)); // should equal 4
// console.log(pow(3, 1)); // should equal 3


module.exports = pow;
