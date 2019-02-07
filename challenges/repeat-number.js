/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    let obj = {}

    for (let i = 0; i < array.length; i++) {
        let val = array[i]
        if (obj[val]) {
            return val;
        } else {
            obj[val] = 1;
        }
    }
}

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,12,17,18,19,20];
// console.log(repeatNumbers(arr))

module.exports = repeatNumbers;
