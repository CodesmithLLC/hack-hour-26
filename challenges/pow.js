/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base = 1, power = 0) {
  // base case
  if (power === 0) return 1;

  // handle positive exponents
  if (power > 0) return base * pow(base, power - 1);

  // handle negative exponents
  // convert to a positive exponent for the rest of the calculations
  const positivePower = Math.abs(power);
  if (power < 0) return (1 / (pow(base, positivePower)));
}

module.exports = pow;

// base cases => power === 0
console.log('pow(0, 0), => 1:', pow(0, 0));
console.log('pow(10, 0), => 1:', pow(10, 0));

// postive exponents
console.log('pow(2, 1), => 2:', pow(2, 1));
console.log('pow(3, 3), => 27:', pow(3, 3));

// negative exponents
console.log('pow(1, -1), => 1:', pow(1, -1));
console.log('pow(16, -1), => 0.0626:', pow(16, -1));
console.log('pow(2, -3), => 0.125:', pow(2, -3));
// console.log('pow(10000, -3), => 10:', pow(10000, -3));
