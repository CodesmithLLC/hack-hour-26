// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] && array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return array;
}

// const a = [3, 1, 7, 4, 9, 5, 2, 6, 0];
// console.log(bubbleSort(a));

module.exports = bubbleSort;
