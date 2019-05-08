/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// Done

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  return b === 0 ? a : gcd(b, a % b);
}

module.exports = gcd;
