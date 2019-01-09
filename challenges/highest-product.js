/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    // sort the array from highest to lowest
    // multiply the first three numbers together and store them in a result variable
    // return the result variable
    let sorted = array.sort(function(a, b){return b-a});
    let result = 1;
    for (let i = 0; i < 3; i += 1){
        result *= sorted[i];
    }
    console.log(result);
    return result;
};

// Test your code;
//highestProduct([65, 14, 35, 17, 8]);
//highestProduct([-1, -100, -4, -16]);


module.exports = highestProduct;
