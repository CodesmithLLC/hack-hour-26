// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            const curEl = array[j - 1];
            array[j - 1] = array[j];
            array[j] = curEl;
            j -= 1;
        }
    }
    return array;
}

// const a = [5, 8, 6, 12, 1, 3];
// console.log(insertionSort(a));

module.exports = insertionSort;