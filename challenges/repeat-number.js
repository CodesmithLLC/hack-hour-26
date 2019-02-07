/**
 * I have an array where every number in the range 1...n appears once, except for 
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
    array.sort(function (a, b){ return a - b });
    for (let i = 0; i < array.length; i += 1){
        if (array[i] === array[i + 1]){
            console.log(array[i])
            return array[i];
        }
    }
}; // end of repeatNumbers


// Test your code
const testArr = [100, 45, 67, 89, 4, 5, 3, 24, 45];
repeatNumbers(testArr);

module.exports = repeatNumbers;
