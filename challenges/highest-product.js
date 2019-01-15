/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return false;


  for (let i = 0; i < array.length; i += 1) {
    const highest = [];
    if (highest.length === 3) {
      console.log(highest);
      return (highest[0] * highest[1] * highest[2]);
    } else {
      let currentHighest = Math.max(...array);
      // console.log(currentHighest)
      highest.push(currentHighest);
      array.splice(array.indexOf(currentHighest), 1);
      // console.log('Original array: ', array);
      // console.log('Highest numbers array: ', highest);
    }
  }
  // return highest;
}

// const array1 = [4, 38];
const array2 = [23, 5, 71, 35, 68];

// console.log(highestProduct(array1));
console.log(highestProduct(array2));


module.exports = highestProduct;
