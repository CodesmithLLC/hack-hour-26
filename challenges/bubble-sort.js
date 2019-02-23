// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j + 1] < array[j]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}

module.exports = bubbleSort;

// const arr = [5, 1, 4, 2, 8, 9];
// bubbleSort(arr);
// console.log(arr);
