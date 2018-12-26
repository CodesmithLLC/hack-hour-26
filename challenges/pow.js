/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, counter =0, result=1) {
    if(counter === power){ 
        return result
    }
    result = result * base
    counter++
    return pow(base, power, counter, result)
}

module.exports = pow;

console.log(pow(5,2))
