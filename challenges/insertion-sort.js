// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// function insertionSort(array) {
//   if (array.length === 0) return [];

//   const output = [array[0]];
//   for (let i = 1; i < array.length; i += 1) {
//     const element = array[i];
//     let insertIndex = output.length;

//     while (insertIndex > 0) {
//       if (element < output[insertIndex - 1]) insertIndex -= 1;
//     }

//     output.splice(insertIndex, 0, element);
//   }

//   return output;
// }

function insertionSort(array) {
  if (array.length === 0) return [];

  for (let i = 0; i < array.length; i += 1) {
    const element = array.splice(i, 1)[0];
    let insertIndex = i;

    while (insertIndex > 0) {
      if (element <= array[insertIndex - 1]) insertIndex -= 1;
    }

    array.splice(insertIndex, 0, element);
  }

  return array;
}

// const before = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const before = [1, 1, 13];

const after = insertionSort(before);

console.log(after);


module.exports = insertionSort;
