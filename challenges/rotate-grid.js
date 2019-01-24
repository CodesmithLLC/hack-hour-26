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

// function rotateGrid(grid, n) {
//     //make a deep copy of the grid
//     let copyGrid = [];
//     for (let m = 0; m < grid.length; m++) {
//       copyGrid[m] = grid[m].slice();
//     };
//     console.log("copyGrid:", copyGrid);
//     //declare a variable arrayTracker and set equal to -1 
//     arrayTracker = -1;
//     //loop through each array in the copyGrid
//     for (let j = copyGrid.length - 1; j >= 0; j--) {
//       //increment arrayTracker
//       arrayTracker += 1;
//       //loop through the entire last array
//           for (let i = 0; i < grid.length; i++) {
//               //push each element from the last array into the first position in each array
//               for (let r = 0; r < grid.length; r++) {
//                 console.log("")
//                   grid[arrayTracker][r] = copyGrid[j][grid[i]];
//                   console.log(grid);
//               }
//           }
//       }
//     return grid;
//   }


function rotateGrid(grid, n) {
  //loop through half of the grid, stopping at n/2, incrementing i by 1 each time
  for (let i = 0; i < Math.floor(n/2); i++) {
    //set first and i at 0 to start
    const first = i; // *first = 0
    //set last equal to half of n, minus 1, minus 1 to start
    const last = n - 1 - i; // *last = 4 - 1 - 0 = 3
    //start a loop, setting j equal to first and stopping before j equals last, inc by 1 each time
    for (let j = first; j < last; j++) { // *j = 2, until j < 3
      //declare a const adjust and set = j - first
      const adjust = j - first; // * j = 2
      //set top equal to first (or i) and j, which starts at first
      const top = grid[first][j]; //* [0][2]

      //left -> top
      grid[first][j] = grid[last - adjust][first]; //* [0][2] = [1][0]
      //bottom -> left
      grid[last - adjust][first] = grid[last][last - adjust]; //* [1][0] = [3][1]
      //right -> bottom
      grid[last][last - adjust] = grid[j][last]; //* [3][2] = [1][3]
      //top -> right
      grid[j][last] = top; //* [1][3] = [0][1]
    }
  }
  return grid;
}

module.exports = rotateGrid;
