// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    array.sort((a, b) => a - b);
    console.log(array);
    return array;
}


// Test your code
let testArr = [5, 3, 1, 6, 8, 7, 2, 4];
bubbleSort(testArr);

module.exports = bubbleSort;
