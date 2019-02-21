/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */
/* eslint-disable */
function getAllProducts(array) {
  const result = [];
  if (!array.length) return [0];
  console.log('array', array);
  for (let i in array) {
    let product = 1;
    for (let j in array) {
      if (j === i) continue;
      product *= array[j];
    }
    result.push(product);
  }
  console.log('result', result);
  return result;
}

module.exports = getAllProducts;
