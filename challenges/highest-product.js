/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  const newArray = array.slice();
  newArray.sort((a, b) => {
    return b - a;
  });
  return (newArray[0] * newArray[1] * newArray[2]);
}

console.log(highestProduct[-1, -2, -3])

module.exports = highestProduct;
