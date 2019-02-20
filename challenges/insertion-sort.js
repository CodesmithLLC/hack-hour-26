// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  // * Check for valid input
  if (!Array.isArray(array)) return undefined;

  // * Loop through array starting at index 1
  for (let i = 1; i < array.length; i++) {
    // * Check if current element is less than previous element
    if (array[i] < array[i - 1]) {
      // * Assign j to equal current element
      let j = i;
      // * Loop over arr backwards decrementing j by one each time, until end of arr is reached or current element is not less than the previous element
      while (j >= 0 && array[j] < array[j - 1]) {
        // * Push previous element up one, and insert current element back one
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        j--;
      }
    }
  }
  return array;
}

const arr = [5, 9, 3, 7, 8, 1]; // => [1,3,5,7,8,9]

console.log(insertionSort(arr));

module.exports = insertionSort;
