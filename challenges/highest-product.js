/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(!Array.isArray(array)) return 0;
  if(array.length < 3) return 0;
  array.sort(sortAlg);
  console.log(array);
  return array[0]*array[1]*array[2];

}

function sortAlg(a,b){
  return b-a;
}
// let arr = [1,-10,-15,-7,-2,-1];
// console.log(highestProduct(arr));


module.exports = highestProduct;
