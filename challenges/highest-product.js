/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// [1,2,3,4,5,6]
function highestProduct(array) {
  // check for array of length 0
  if (array.length < 3 || !Array.isArray(array)) {
    return 0;
  }
  // sort the array from largest to smallest integer value
  array.sort((a, b) => b - a);

  // assign variables to last 2 elements in sorted array. If these are large negatives, they could result in a larger product
  const lastElem = array[array.length - 1];
  const secondToLast = array[array.length - 2];
  // assign variables to first three elements in arrays
  const firstElement = array[0];
  const secondElement = array[1];
  const thirdElement = array[2];
  // calculate products
  const product1 = firstElement * secondElement * thirdElement;
  const product2 = firstElement * lastElem * secondToLast;
  // check which product is greater
  const finalProduct = Math.max(product1, product2);
  return finalProduct;
}

const arrOfInts = [-1, -3, -6, -4, 8];
console.log(highestProduct(arrOfInts));
module.exports = highestProduct;
