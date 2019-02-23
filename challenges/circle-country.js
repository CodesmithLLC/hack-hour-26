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
    
    //find the distance between the point and the center of EVERY circle
    //if the point is not is inside the circle, that means there is a way to get to the destination without crossing in.

    //loop over the arrays, finding the distance between destination and the center of the circle
    //The point is inside the circle if d<r. Increment the counter.
    //The point is on the circle if d=r. Increment the counter.
    // Outside the circle if d>r. 

    //Compare the start point to all the circles.
    //Compare the end point to all the circles. 

    let counter = 0;

    for(let i=0; i<x.length; i++){
        let distance = Math.sqrt(((start_x - x[i])**2) + ((start_y - y[i])**2))
        if (distance <= r[i]){
            counter++
        }
    }
    for(let j=0; j<x.length; j++){
        let endDistance = Math.sqrt(((end_x - x[j])**2) + ((end_y - y[j])**2))
        if (endDistance <= r[j]){
            counter++
        }
    }

    
    return counter

}


//APPROACH 1
    //find equation of the line
    //plug in the the points along the curve of the circle to see if there is an intersection

    //calculus?


// console.log(circleCountry([4,2,0], [0,1,-4], [1,1,8], 4, 3, -3, 0))

module.exports = circleCountry;
