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

    // two loops, one skipping over the first loops value

    const productsArr = [];
    for (let i = 0; i < array.length; i++) {
        let product = array[0] ;
        for (let j = 1; j < array.length; j++) {
            if (i !== j){
                product *= array[j];
            }
        }
        productsArr.push(product);
    }
    return productsArr;
    
}

// console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
