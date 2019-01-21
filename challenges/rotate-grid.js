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
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
    //make a deep copy of the grid
    let copyGrid = [];
    for (let m = 0; m < grid.length; m++) {
      copyGrid[m] = grid[m].slice();
    };
    console.log("copyGrid:", copyGrid);
    //declare a variable arrayTracker and set equal to -1 
    arrayTracker = -1;
    //loop through each array in the copyGrid
    for (let j = copyGrid.length - 1; j >= 0; j--) {
      //increment arrayTracker
      arrayTracker += 1;
      //loop through the entire last array
          for (let i = 0; i < grid.length; i++) {
              //push each element from the last array into the first position in each array
              for (let r = 0; r < grid.length; r++) {
                console.log("")
                  grid[arrayTracker][r] = copyGrid[j][grid[i]];
                  console.log(grid);
              }
          }
      }
    return grid;
  }

module.exports = rotateGrid;
