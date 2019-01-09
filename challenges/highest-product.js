/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort((a, b) => a - b);
  let len = array.length;
  let maxProduct = sortedArr[len - 1] * sortedArr[len - 2] * sortedArr[len - 3];
  return maxProduct;
}

console.log(highestProduct([1, 2, 3, 8, 9, 11, 10]));

module.exports = highestProduct;
