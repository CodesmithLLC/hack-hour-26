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
  const triangle = [];

  // build a pyramid
  for (let n = 1; n <= numRows; n += 1) {
    const row = new Array(n).fill(1);
    triangle.push(row);
  }
  console.log(triangle);

  for (let row = 1; row < numRows; row += 1) {
    const thisRow = triangle[row];
    const nextRow = triangle[row + 1];
    console.log(`next row: ${nextRow}`);
    for (let i = 0; i < row - 1; i += 1) {
      const newValue = thisRow[i] + thisRow[i + 1];
      nextRow[i + 1] = newValue;
    }
  }

  console.log(triangle);
}

pascalTriangle(5);

module.exports = pascalTriangle;
