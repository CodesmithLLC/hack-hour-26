/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let x;
  let y;

  if (a <= 0 || b <= 0) return undefined;

  // assign num var to x, smaller to y
  if (a >= b) {
    x = a;
    y = b;
  }

  if (b > 1) {
    x = b;
    y = a;
  }
  // check if x is divisible by y
  if (x % y === 0) return y;


  // loop over numbers y/2 down to 1
  for (let num = Math.floor(y / 2); num > 0; num -= 1) {
    // check to see if y is divisible by number
    // if yes, check to see if x is also divisible by number
    // if also yes, return number
    if (y % num === 0 && x % num === 0) return num;
  }
}

module.exports = gcd;

console.log('expect 1:', gcd(1, 1));
console.log('expect 1:', gcd(1, 5));
console.log('expect 2:', gcd(2, 4));
console.log('expect 5:', gcd(5, 15));
console.log('expect 3:', gcd(9, 15));
