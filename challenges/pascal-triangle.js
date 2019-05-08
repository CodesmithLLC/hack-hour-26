/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
/**
 * 1. For loop for creating rows up to numRows
 * 2. While loop for creating each element of the array
 * 3. Conditional statement to check to see if at the beginning or end of the array, set 1 and continue
 * 4. Calculate value of element by adding value of element of last row at current i and last row and i-1
 */
}

module.exports = pascalTriangle;
