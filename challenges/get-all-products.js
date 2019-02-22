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

function getAllProducts(array) {
  //declare a constant set equal to an empty array
  const productArray = [];
  //loop through the argument array
  for (let i = 0; i < array.length; i++) {
    //stopping condition: 

    //use a while loop, stopping when 
    while (i)
        //multiply the value at position 0 by the values at 

    productArray.push(array[i] * array[i + 1])
      //use recursion

    }

}

module.exports = getAllProducts;
