/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!Array.isArray(array)){return 0;}
    if(array.length > 3){return 0;}
    array.sort(function(a, b) {
      return a - b;
    });
    if(array[0] > 0 && array.length >= 3){
        return array.pop() * array.pop() * array.pop()
    }
    if(array.length >= 3){
        if((array[0] * array[1] * array[length -1]) >= (array[length-1] * array[length-2] * array[length-3])){
            return array[0] * array[1] * array[length -1]
        }
    }
  
  }


module.exports = highestProduct;
