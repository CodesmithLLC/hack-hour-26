

/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  // initiate two pointers, 0 and length - 1
  let front = 0;
  let back = array.length - 1;

  // while first is smaller than last pointer
  while (front < back) {
    // grab element at each pointer
    const fromFront = array[front];
    const fromBack = array[back];

    // place element in array at opposite pointer
    array[back] = fromFront;
    array[front] = fromBack;

    // increment/decrement pointers
    front += 1;
    back -= 1;
  }
  return array;
}

// * Testing * //

// const empty = [];
// const single = [0];
// const odd = [0, 1, 2, 3, 4];
// const even = [0, 1, 2, 3, 4, 5];

// console.log('[] => []', reverseInPlace(empty));
// console.log('[0] => [0]', reverseInPlace(single));
// console.log('[0, 1, 2, 3, 4] => [4, 3, 2, 1, 0]', reverseInPlace(odd));
// console.log('[0, 1, 2, 3, 4, 5] => [5, 4, 3, 2, 1, 0]', reverseInPlace(even));


module.exports = reverseInPlace;
