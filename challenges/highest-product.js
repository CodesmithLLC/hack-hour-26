/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


/**
 * I - arr of nums ->
 * O - highest product obtainable by multiplying any three of the nums
 * C
 * E
 * 
 * @param {*} array 
 */
/**
 * 
 * [7, 6, 8, 9]
 * 
 */
const highestProduct = (arr) => {
  // reduce arr -> memo -> highest: {first: 0, second: 0, third: 0},
  const topThree = arr.reduce((highest, num) => {
    let first = highest.first;
    let second = highest.second;
    let third = highest.third;

    if (num >= highest.first) {
      highest.second = first; 
      highest.third = second;
      highest.first = num;
    } else if (num >= highest.second) { 
      highest.third = second;
      highest.second = num;
    } else if (num >= highest.third) { 
      highest.third = num;
    }

    return highest;
  }, { first: 0, second: 0, third: 0 });

  return topThree.first * topThree.second * topThree.third;
};

module.exports = highestProduct;
