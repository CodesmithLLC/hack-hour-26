/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, acc = base) {
  if (power === 1) return acc;

  return pow(base, power - 1, acc * base);
}

// function pow(base, power, acc = base) {
//   if (power === 1) return acc;

//   acc *= base;
//   return pow(base, power - 1, acc);
// }

// function pow(base, power, acc = base) {
//   if (power === 1) return acc;

//   const product = acc * base;
//   return pow(base, power - 1, product);
// }

module.exports = pow;
