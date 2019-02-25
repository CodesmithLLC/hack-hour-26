// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let temp = 0;
    for (let i = 1; i < array.length; i += 1){
        if (array[i] < array[i - 1]){
            temp = array[i];
            console.log("Temp is: ", temp);
            array[i] = array[i - 1];
            array[i - 1] = temp;
        }
        else {
            array[i] = array[i];
        }
    }
    return array;
}

// Test your code
let testArray = [6, 5, 3, 1, 8, 7, 2, 4];
console.log("Expect [1, 2, 3, 4, 5, 6, 7, 8]. Got :", insertionSort(testArray));

module.exports = insertionSort;