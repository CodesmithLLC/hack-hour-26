/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') return undefined;
  if (a === 0 || b === 0) return Math.max(a, b);
  // * SET A VARIABLE EQUAL TO THE MINIMUM INPUT ARG
  let diviser = Math.min(Math.abs(a), Math.abs(b));
  // * LOOP DIVISER NUMBER OF TIMES
  while (diviser >= 0) {
    // * MODULO BOTH NUMBERS BY THE DIVISER, IF DIVISIBLE BY BOTH, RETURN MIN
    if (a % diviser === 0 && b % diviser === 0) return diviser;
    // * ELSE DECREMENT DIVISER BY ONE AND KEEP LOOPING
    else {
      diviser -= 1;
    }
  }
}

console.log(gcd(10, -9));

module.exports = gcd;
