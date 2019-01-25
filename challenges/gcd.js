/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  //modulo of each number and compare
  let result;

  if (a > 0 && b > 0) {
    for (let j = 0; j < b; j++) {
      if (a % j === 0 && b % j === 0) {
        result = j;
        if (j > result) {
          result = j;
        }
      }
    }
  }
  //two negative numbers
  if (a < 0 && b < 0) {
    for (let j = b - 1; j <= 0; j++) {
      if (a % j === -0 && b % j === -0) {
        result = j;
        if (j > result) {
          result = j;
        }
      }
    }
  }

  //check for one negative and one positve
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    result = -1;
  }

  return result;
}

console.log(gcd(100, 80));

module.exports = gcd;
