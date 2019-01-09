/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //sort it from biggest to smallest. 
    let numbers = array;
    numbers.sort((a, b) => b - a);
    //grab the first three values.
    let product = numbers[0] * numbers[1] * numbers[2]
    //multiply them and return the product. 
    return product
}



module.exports = highestProduct;

// console.log(highestProduct([4,2,3,10]))

