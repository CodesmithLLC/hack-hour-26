// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  //loop through the array starting at position 0
  for (let i = 0; i < array.length; i += 1) {
    //declare a variable j, to allow for the scope to exceed the sencond for loop
    let j;
    //declare a variable value, and set equal to the value of the array at position i
    //value will store the value at array[i] until we are ready to place it
    let value = array[i];
    //initialize a second for loop, starting at one space behind the first loop
    //with the conditions that j be greater than 0, and that the value of the element at position j be greater than the value of the element at position i
    //decrement j by 1
    for (j = (i - 1); j >= 0 && array[j] > value; j -= 1) {
      //set the element one place ahead of elememt j equal to the value of the element in the array at position j
      array[j + 1] = array[j];
    }
    //once j is equal to less than 0, or the value of array[j] is greater than value, set the element at position j + 1 equal to value
    array[j + 1] = value;
  }
  //return the array
  return array;
}


module.exports = insertionSort;