/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {
  // tail call recursion
  if (power === 0) return result;
  if (power > 0) {
    return pow(base, power - 1, result * base);
  }
  if (power < 0) {
    return pow(base, power + 1, result / base);
  }
  // linear recursion
//   if (power === 0) return 1;
//   return base * pow(base, power - 1);
}

// console.log(pow(2, 0)); // should equal 1
// console.log(pow(2, 1)); // should equal 2
// console.log(pow(2, 2)); // should equal 4
// console.log(pow(3, 1)); // should equal 3
// console.log(pow(2, -2)); // should equal 1


module.exports = pow;
