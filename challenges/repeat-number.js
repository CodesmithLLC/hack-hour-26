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
    const acc = new Set();
    for (let i = 0; i < array.length; i++) {
        if (acc.has(array[i])) return array[i];
        acc.add(array[i]);
    }
    return 'no duplicates';
}

module.exports = repeatNumbers;
