/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise 
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

// 1 2 3 
// 4 5 6 
// 7 8 9
//     
// last nested arr // 3    // 6    // 9

// 1 2 1 / 4 5 2 / 7 8 3
//     ^       ^       ^
   //       // 5

// _ 4, 1 / _ 5, 2 / 7, 8, 3 




// 7 4 1 / 8 5 2 / 9 6 3

// the first row needs to become the reverse of the first column
// the next row needs to become the reverse of the next column


function rotateGrid(grid, n) {
  // for each element in grid
    // iterate from first to last 
      // store the last 
      // make the first

}

module.exports = rotateGrid;
