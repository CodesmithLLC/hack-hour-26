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
  //create empty array to build triangle
  const result = [];
  //loop number of rows times
  for (let i = 0; i < numRows; i++) {
    //create new row array
    result.push([]);
    //loop i + 1 times to push elements into row array
    for (let j = 0; j < i + 1; j++) {
      //if j is 0 or j is i+1 push 1 into array
      if (j === 0 || j === i) { result[i].push(1) }
      //else push result[i-1][j] + result[i-1][j-1] to result array
      else {
        result[i].push(result[i - 1][j] + result[i - 1][j - 1]);
      }
    }
  }
  return result;
}

console.log(pascalTriangle(5));

module.exports = pascalTriangle;
