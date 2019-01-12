/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let first = 0; // storing the highest to 3rd highest values
    let second = 0;
    let third = 0;
    for (let i = 0; i < array.length;i++) {
        if (array[i] > first) {
            third = second;
            second = first;
            first = array[i];
    }
        else if (array[i] > second) {
            third = second;
            second = array[i]
        }
        else if (array[i] > third) {
            third = array[i];
        }
}
    console.log(first);
    console.log(second);
    console.log(third);
    return (first*second*third);
}
console.log(highestProduct([1,25,5,17,4,3,6,27,7,8,,11,5]));


module.exports = highestProduct;
