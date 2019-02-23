// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  const sorted = array.slice();
  let { length } = array;

  array.forEach(() => {
    let temp;
    let i = 0;
    let j = 1;

    while (i < length - 1) {
      // swap and increment
      if (sorted[i] > sorted[j]) {
        temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
      i += 1;
      j += 1;
    }

    length -= 1;
  });
  return sorted;
}

const arr = [9, 4, 7, 2, 8, 4, 2, 1, 6];
const sorted = bubbleSort(arr);
console.log('sorted:', sorted);


module.exports = bubbleSort;
