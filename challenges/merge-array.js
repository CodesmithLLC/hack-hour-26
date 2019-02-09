/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *[1, 3]




 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  const longest = arr1.length > arr2.length ? arr1 : arr2;
  const shortest = arr1.length < arr2.length ? arr1 : arr2;
  const remainder = longest.slice(shortest.length);

  const merged = shortest.reduce((merged, num, i) => {
    const min = Math.min(num, longest[i]);
    const max = Math.max(num, longest[i]);
    merged.push(min, max);

    let temp;
    if (merged[merged.length - 3] > merged[merged.length - 2]) {
      temp = merged[merged.length - 3];
      merged[merged.length - 3] = merged[merged.length - 2];
      merged[merged.length - 2] = temp;
    }
    return merged;
  }, []);

  return remainder ? merged.concat(remainder) : merged;
}

module.exports = mergeArrays;
