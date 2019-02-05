/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  //declare two variables to store the lower and higher values
  let lower;
  let higher;
  //determine which argument is smaller
  if (a < b) {
    lower = a;
    higher = b;
  } else {
    lower = b;
    higher = a;
  }
  //use a loop starting with the smaller number and decreasing, stopping before 0
  for (let i = lower; i > 0; i--) {
      //divide the smaller number by i using the modulo, if the result is 0
      if (lower % i === 0) {
        //then divide the larger number by that number
        if (higher % i === 0 ) {
          //if that number is zero, return that number
          return i;
        }
      }
    }
}

module.exports = gcd;