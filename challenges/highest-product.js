/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array, top3 = []) {
//     // base case when our highest array length is 3 or array.length === 0
//     if (array.length === 0 || !Array.isArray(array)) {
//         return 0;
//     }

//     if (top3.length === 3) {
//         return top3.reduce((accum, current) => {
//             return accum * current
//         });
//     } 

//     let largestNum = -Infinity;
//     let position;

//     for (let j = 0; j < array.length; j++) {
//         if (array[j] > largestNum) {
//             largestNum = array[j];
//             position = j;
//         }
//     }
//     top3.push(largestNum)
//     array.splice(position, 1)

//     return highestProduct(array, top3)
// }




// sorted way incomplete though, reduce the top 3 in the return line 44
function highestProduct(array) {
    if (array.length < 3 || !Array.isArray(array)) {
        return 0;
    }

    let sortedArr = array.sort((a, b) => {
        return a -b;
    })

    const top3 = sortedArr.slice(array.length - 3)

    return top3.reduce((accum, current) => {
        return accum * current;
    });
}

// const arr = [8,2,4,7]
// console.log(highestProduct(arr, top3 = []))



module.exports = highestProduct;
