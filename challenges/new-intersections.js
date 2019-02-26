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
    let intCount = 0;
    let xObj = {};
    let yObj = {};
    x.forEach((coor, i) => {
        if (yObj[coor]) {
            yObj[coor].push(y[i]);
        } else {
            yObj[coor] = [y[i]];
        }
    });

    Object.keys(yObj).forEach(key => {
        if (yObj[key].length < 2) delete yObj[key];
    });

    y.forEach((coor, i) => {
        if (xObj[coor]) {
            xObj[coor].push(x[i]);
        } else {
            xObj[coor] = [x[i]];
        }
    });

    Object.keys(xObj).forEach(key => {
        if (xObj[key].length < 2) delete xObj[key];
    });

    Object.keys(xObj).forEach(xKey => {
        Object.keys(yObj).forEach(yKey => {
            if (xKey < Math.max(...yObj[yKey]) &&
                xKey > Math.min(...yObj[yKey]) &&
                yKey < Math.max(...xObj[xKey]) &&
                yKey > Math.min(...xObj[xKey])) {
                intCount += 1;
            }
        });
    })

    return intCount;
}

// const x = [3, 8, 5, 1, 10, 5];
// const y = [5, 3, 7, 3, 6, 1];

console.log(newIntersections(x, y));

module.exports = newIntersections;
