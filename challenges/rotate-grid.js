/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * [[1,2,3,a],
 * [4,5,6,b].
 * [7,8.9,c],
 * [1,2,3,d]]
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  const newGrid = [];
  let num = n - 1;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (!newGrid[j]) newGrid.push([]);
      newGrid[j][num] = grid[i][j];
    }
    num -= 1;
  }
  return newGrid;
}

// const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(rotateGrid(sampleGrid, 3));

module.exports = rotateGrid;
