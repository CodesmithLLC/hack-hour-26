// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    // iterates through an array, starting from the beginning,
    // each iteration runs through an iteration of the sorted, 
    
    // start at 1, because nowhere to place first variable
    for (let i = 1; i < array.length; i++){

        let currentNum = array[i];

        for (let j = i; j >= 0 && array[j] > currentNum; j--) {
            array[j + 1] = array[j];
        }
        console.log(array[i+1]);
    }
    return array

}

let arr = [0,5,3,6,1,66,22,19,2]
console.log(insertionSort(arr));

module.exports = insertionSort;