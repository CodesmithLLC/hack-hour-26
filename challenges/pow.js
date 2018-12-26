/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // write a function called pow
    // take in two inputs - base and power
    // find base^power - which is just base multiplied by itself power amount of times
    // use recursion
    // decrement power by 1 each time
    // base case - when power equals 1
        if(power === 1){
            return base;
        }
        return base * pow(base, power - 1);
    
    }
    
console.log(pow(2,2));
console.log(pow(3,4));
console.log(pow(8,3));

module.exports = pow;
