/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  if (array.length === 3) return array[0] * array[1] * array[2];

  const arr = quickSort(array);
  return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
}

module.exports = highestProduct;

console.log(highestProduct({ 1: 2 }));
console.log(highestProduct([1, 2]));
console.log(highestProduct([1, 2, 3]));
console.log(highestProduct([4, -5, 6, -10, 2, 9, 8, 3]));
