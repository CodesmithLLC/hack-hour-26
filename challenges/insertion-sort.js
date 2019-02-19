// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let value = array[i];
      for (j; j > - 1 && array[j] > value; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = value;
  }
  return array;
}


module.exports = insertionSort;