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

function newIntersections(x, y) {
  const horizontal = new Set();
  const vertical = new Set();
  let intersections = 0;

  // collect all vertical and horizontal lines
  for (let i = 0; i < x.length; i += 1) {
    for (let j = 0; j < x.length; i += 1) {
      const a = [x[i], y[i]];
      const b = [x[j], y[j]];
      const line = [a, b].sort();

      if (a[0] !== b[0] && a[1] === b[1]) horizontal.add(line);

      if (a[0] === b[0] && a[1] !== b[1]) vertical.add(line);
    }
  }
  // line = [[x1, y1], [x2, y2]]
  // for each horizontal line
  horizontal.forEach((h) => {
    // loop through vertical lines
    const [a, b] = h;
    vertical.forEach((v) => {
      const [c, d] = v;
      // is vertical's x between horizontal's x's?
      if (a[0] <= c[0] && c[0] <= b[0]) {
        // AND is horizontal's y between vertical's y's?
        // we don't know what order the y's are in, need to check for both cases
        // Yes? -> chalk it up!
        if ((c[1] <= a[1] && a[1] <= d[1]) || (c[1] >= a[1] && a[1] >= d[1])) intersections += 1;
      }
    });
  });
  return count;
}

module.exports = newIntersections;
