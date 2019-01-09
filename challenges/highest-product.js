/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    // highest product from 3 numbers within an array
    let first = 0; // storing the highest to 3rd highest values
    let second = 0;
    let third = 0;
    for (let i = 0; i < array.length;i++) {
        if (array[i] > first) {
            third = second;
            second = first;
            first = array[i];
    }
}
    // console.log(first);
    // console.log(second);
    // console.log(third);
    return (first*second*third);
}
highestProduct([1,5,4,3,6,7,8,11,5]);


module.exports = highestProduct;
