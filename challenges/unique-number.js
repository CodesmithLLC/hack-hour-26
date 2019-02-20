/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,7,2,1,3,7,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
    const wrkObj = new Set();
    array.forEach(e => {
        wrkObj.has(e) ? wrkObj.delete(e) : wrkObj.add(e);
    });
    return wrkObj.values().next().value;
}

console.log(uniqueNumber([1, 7, 2, 1, 3, 7, 3]));

module.exports = uniqueNumber;
