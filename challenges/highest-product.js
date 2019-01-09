/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 0) return 0;

  let x = 1;
  let y = 1;
  let z = 1;

  if (array.length > 0) x = array.shift();
  if (array.length > 0) y = array.shift();
  if (array.length > 0) z = array.shift();

  array.forEach((num) => {
    if (num > x) {
      x = num;
    } else if (num > y) {
      y = num;
    } else if (num > z) {
      z = num;
    }
  });

  return x * y * z;
}

module.exports = highestProduct;

// *** TESTING *** //
// console.log(`[] => ${highestProduct([])}`);
// console.log(`[0] => ${highestProduct([0])}`);
// console.log(`[1] => ${highestProduct([1])}`);
// console.log(`[2, 2] => ${highestProduct([2, 2])}`);
// console.log(`[-2, 2] => ${highestProduct([-2, 2])}`);
// console.log(`[2, 2, 5] => ${highestProduct([2, 2, 5])}`);
// console.log(`[2, 2, 5, 7, 0] => ${highestProduct([2, 2, 5, 7, 0])}`);
// console.log(`[2, 5, 9, 10, 10, 10] => ${highestProduct([2, 5, 9, 10, 10, 10])}`);
