// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

/* eslint-disable */

function insertionSort(array) {
  let i = 1;
  let k = 1;
  let sorting;
  let temp;
  while (array[i]) {
    if (array[i] > array[i - 1]) {
      i++;
      k++;
      continue;
    } else {
      sorting = array[k];
      while (sorting < array[k - 1]) {
        temp = array[k - 1];
        array[k] = temp;
        k--;
      }
      array[k] = sorting;
      k = i + 1;
    }
    i++;
  }
  return array;
}

module.exports = insertionSort;
