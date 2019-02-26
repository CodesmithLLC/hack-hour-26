/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

// ! INPUT: ARRAY
// ! OUTPUT: NUMBER OF POINTS

function newIntersections(x, y) {
  // * CHECK FOR VALID INPUT
  if ((!Array.isArray(x) && !Array.isArray(y)) || x.length === 0 || y.length === 0) return 0;
  // * DECLARE COUNTER
  let counter = 0;
  // * LOOP OVER X AND Y ARRAY
  for (let i = 0; i < x.length; i++) {
    // * CHECK IF POINT IS DIRECTLY BELOW, ABOVE, TO THE LEFT AND TO THE RIGHT OF THE OLD POINTS
    // * INCREMENT COUNTER
  }
  // * RETURN COUNTER
}

module.exports = newIntersections;
