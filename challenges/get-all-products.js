/* Create a function that accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    let productArr = [];
    if (array.length < 1){
        return [0];
    }
    for (let i = 0; i < array.length; i += 1){
        let result = 1;
        for (let j = 0; j < array.length; j += 1){
          if(i !== j){
            result *= array[j]
          }
        }
        productArr.push(result);
    }
    console.log(productArr);
    return productArr;
}

// Test your code
getAllProducts([1, 7, 3, 4]); // ->  [84, 12, 28, 21];

// this is done via:
// [1*7*3, 7*3*4, 3*4*1, 4*1*7]

module.exports = getAllProducts;
