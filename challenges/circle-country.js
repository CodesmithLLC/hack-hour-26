/* eslint-disable camelcase */
/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  // use the distance formula to determine whether points are inside or outside of circles.

  const startingCircles = new Set();
  const endingCircles = new Set();
  // determine how many and WHICH circles Tyus begins inside (store in set)
  for (let i = 0; i < r.length; i += 1) {
    // start inside cicrle? -> yes -> add i to startingCircles
    const startDistance = (((x[i] - start_x) ** 2) + ((y[i] - start_y) ** 2)) ** (1 / 2);
    if (startDistance < r[i]) startingCircles.add(i);

    // end inside cicrle? -> yes -> add i to endingCircles
    const endDistance = (((x[i] - end_x) ** 2) + ((y[i] - end_y) ** 2)) ** (1 / 2);
    if (endDistance < r[i]) endingCircles.add(i);
  }

  // determine how many and WHICH circles Tyus ends inside (store in set)
  let count = startingCircles.size + endingCircles.size;

  // combine the two collections of circles, removing any cirlces that occur in both sets (meaning he never passed outside of that circle)
  startingCircles.forEach((circle) => {
    if (endingCircles.has(circle)) count -= 2;
  });

  return count;
}

module.exports = circleCountry;
