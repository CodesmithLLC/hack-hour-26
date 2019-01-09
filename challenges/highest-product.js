/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, top3 = []) {
    // base case when our highest array length is 3 or array.length === 0

    if (top3.length === 3 || array.length === 0) {
        return top3.reduce((accum, current) => {
            return accum * current
        });
    } 

    let largestNum = -Infinity;
    let position;

    for (let j = 0; j < array.length; j++) {
        if (array[j] > largestNum) {
            largestNum = array[j];
            position = j;
        }
    }
    top3.push(largestNum)
    array.splice(position, 1)
    
    return highestProduct(array, top3)
}

// const arr = []

// console.log(highestProduct(arr, top3 = []))

module.exports = highestProduct;
