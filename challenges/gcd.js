/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 * 
 * //
 * % gives remainder. 
 * 10
 * 10/5
 *8/4
 10/4
 10/3
 10/2
 8/2

//Use recursion?

 */

function gcd(a, b, ogB=b) {
    //try to the divide the first num by the second num
    //if it divides with no remainder...
        //check if the second num also divides by that new num. 
        //if it does, return that newNum
        //if it doesn't, lower the newNum and check again
    //if there's a remainder, lower the second and check again -- 
    if((a%b===0) && (ogB%b===0)){
        return b
    }else{
        return gcd(a, b-1, ogB)
    }

}

// console.log(gcd(10,8))
// console.log(gcd(10,9))
// console.log(gcd(12,8))
// let result = 10%5
// console.log(result)
module.exports = gcd;