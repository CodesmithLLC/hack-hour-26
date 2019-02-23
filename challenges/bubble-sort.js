// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                const temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                sorted = false;
            }
        }
    }
    return array;
}

const a = [3, 1, 7, 4, 9, 5, 2, 6, 0];
console.log(bubbleSort(a));

module.exports = bubbleSort;
