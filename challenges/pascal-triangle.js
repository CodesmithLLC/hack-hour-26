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
  if (numRows === 0) return triangle;
  let i = 0;
  while (i < numRows) {
    if (triangle[i - 1] === undefined) {
      triangle[i] = [1];
    } else {
      const prev = triangle[i - 1];
      triangle[i] = [];
      for (let j = 0; j <= prev.length; j += 1) {
        if (j === 0 || j === prev.length) {
          triangle[i].push(1);
        } else {
          triangle[i].push(prev[j - 1] + prev[j]);
        }
      }
    }
    i += 1;
  }
  return triangle;
}

module.exports = pascalTriangle;

// console.log(pascalTriangle(0));
// console.log(pascalTriangle(1));
// console.log(pascalTriangle(2));
// console.log(pascalTriangle(3));
// console.log(pascalTriangle(4));
// console.log(pascalTriangle(5));
// console.log(pascalTriangle(6));
// console.log(pascalTriangle(7));
// console.log(pascalTriangle(8));
