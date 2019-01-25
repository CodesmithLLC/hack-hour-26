/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const start = (a < b) ? Math.floor(a / 2) : Math.floor(b / 2);
  //   console.log(start);
  for (let i = start; i > 0; i -= 1) {
    // console.log(a % i);
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}


module.exports = gcd;


console.log(gcd(10, 8));
console.log(gcd(10, 9));

