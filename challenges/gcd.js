/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  if (a === 0 || b === 0) return 'moo';
  if (a === b) return a;
  if (a > b) {
    let moo = 1;
    for (let i = 0; i < b; i += 1) {
      if (a % i === 0 && b % i === 0) moo = i;
    }
    return moo;
  }
  if (a < b) {
    let moo = 1;
    for (let i = 0; i < a; i += 1) {
      if (a % i === 0 && b % i === 0) moo = i;
    }
    return moo;
  }
}

module.exports = gcd;
