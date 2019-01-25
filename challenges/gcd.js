/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if(a === b ) return a;

    let divisor;

    if (a >= b){
        divisor = b
    }else {
        divisor = a
    }

    for (divisor; divisor >= 1; divisor--){
        if(a % divisor === 0 && b % divisor === 0) return divisor
    }

}

module.exports = gcd;