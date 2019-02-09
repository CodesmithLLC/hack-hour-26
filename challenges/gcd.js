/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// this is dumb because the actual gd of any number is itself
// though that amounts to a kind of edge case

// find gd for first number
const getGD = (n, nextLowerInteger = n - 1) => {
  if (Number.isInteger(n / nextLowerInteger)) {
    return nextLowerInteger;
  }
  return getGD(n, nextLowerInteger - 1);
};


function gcd(a, b) {
  const gdA = getGD()
  // gdA = evaluated ret val of helper
  // gdB = evaluated ret val of helper
  // if gdA strict equals gdB, 
    // return val of gdA
  // if gdA is lower than gdB
    // call getGD on B and pass GD two as second arg
  // if 
}

module.exports = gcd;