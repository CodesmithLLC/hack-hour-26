/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) return 1; // if power is 0, always equal to 1.
    if (power === 1) return base;
    if (power === -1) return (1 / base); // working with negative exponents
    if (power > 1) {
       return base * pow(base, power -1);
    };
    if (power < 1) {
        return base * pow(base, power +1);
    }
}

console.log(pow(2,3));
// console.log(pow(2,-4));
module.exports = pow;
