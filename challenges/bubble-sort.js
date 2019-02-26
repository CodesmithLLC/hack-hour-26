// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  // check for valid input
  if (!Array.isArray(array) || array.length === 0) return [];
  // declare var to track if array is sorted
  let elementsOutOfOrder = 0;

  // initial check for out of order elements
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      elementsOutOfOrder += 1;
    }
  }
  if (elementsOutOfOrder === 0) return array;

  while (elementsOutOfOrder > 0) {
    // loop over the array the check if it's sorted
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        elementsOutOfOrder += 1;
      } else {
        elementsOutOfOrder -= 1;
      }
    }
    // loop over array and swap elements out of order
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([ 4, 5, 3, 2, 1]));

module.exports = bubbleSort;
