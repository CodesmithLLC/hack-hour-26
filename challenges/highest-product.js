/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let highestNums =  array.sort(function(a, b) {return b-a}).slice(0, 3).reduce((a,b) => {a * b});
    return highestNums.reduce((a,b) => a * b);
}


// function highestProduct(array) {
//     //declare a constant highestNums and set equal to an empty array
//     const highestNums = [];
//     //declare a variable product
//     let product;
//     //use the sort method to sort the array
//     array.sort(function(a, b) {return b-a});
//     //use array.slice to create an array with only the first 3 numbers in the array
//     highestNums = array.slice(0, 3);
//     //multiply them together
//     product = highestNums[0] * highestNums[1] * highestNums[2];
//     //return the result
//     return product;
// }

module.exports = highestProduct;