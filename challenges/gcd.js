/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let i = 1;
  let greatest;
  while (a % i === 0 && b % i === 0) {
    greatest = i;
    i += 1;
  }
  return greatest;
}

console.log(gcd(12, 36));

module.exports = gcd;