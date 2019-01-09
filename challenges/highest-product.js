/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// [1,2,3,4,5,6]
function highestProduct(array) {
  // check for array of length 0
  if (array.length === 0) return 0;
  // sort the array from largest to smallest integer value
  array.sort((a, b) => b - a);
  // multiply the first three elements together
  let product = 1;
  for (let i = 0; i < 3; i++) {
    product *= array[i];
  }
  return product;
}

const arrOfInts = [1, 3, 6, -4, 8, 0];
console.log(highestProduct(arrOfInts));
module.exports = highestProduct;
