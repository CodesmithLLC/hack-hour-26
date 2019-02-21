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
    //iterate by holding onto the element in the array in a temp var, turn that array element into a 1
    //then find the product of all the values in the array. 
    let productsArr = [];
    let product = 1;
    let temp;

    for(let i=0; i<array.length; i++){
        temp = array[i];
        array[i] = 1
        //find the product of all the numbers in the array
        for(let j=0; j<array.length; j++){
            product = array[j] * product
        }
        //push that value into the productsArray
        productsArr.push(product)
        //now turn the number back to its original
        array[i] = temp;
        product = 1
    }
    return productsArr
}

// console.log(getAllProducts([1, 7, 3, 4]))

module.exports = getAllProducts;
