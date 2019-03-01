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
  if (numRows < 0) return [];
  if (typeof numRows !== 'number' || Number.isNaN(numRows)) return 'Please input a number!'
  if (!Number.isInteger(numRows)) return 'Please input an integer!'
  const result = [];
  // Create a loop that will iterate from 0 to num rows
  for (let i = 0; i < numRows; i += 1) {
    // if first row then push first array in with an element with the number 1
    if (i === 0) result.push([1]);
    else {
      const newRow = [];
      // iterate from zero to the current row number
      for (let j = 0; j < i + 1; j += 1) {
        // put one in the beginning and end of the new row
        if (j === 0) newRow.push(1);
        else if (j === i) newRow.push(1);
        // otherwise add the elements from the last row together (currentIndex and currentIndex - 1)
        else {
          const lastRow = result[i - 1];
          newRow.push(lastRow[j] + lastRow[j - 1]);
        }
      }
      result.push(newRow);
    }
  }
  // return result
  return result;
}

module.exports = pascalTriangle;
