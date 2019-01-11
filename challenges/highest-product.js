/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if(array.length < 3){
    return 0;
  }

  if(!(Array.isArray(array))){
    return 0;
  }

  const sorted = array.sort(function(a, b){return b-a})
  const smallestOne = sorted[sorted.length-1];
  const smallestTwo = sorted[[sorted.length-2]];

  const secondLargest =sorted[1];
  const thirdLargest =[sorted[2]];

  return product;


}

highestProduct([-10,-100,3,69,100,14]);

module.exports = highestProduct;
