/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * n === 3
 * 1 1 1
 * 2 1
 * 1 2
 * 
 * n === 4
 * 1 1 1 1
 * 2 1 1
 * 1 2 1
 * 1 1 2
 * 2 2 
 * 
 * 
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
    let count = 0;
    function rFunc(stairsLeft) {
        if (stairsLeft === 0) {
            count++;
            return;
        }
        if (stairsLeft >= 1) rFunc(stairsLeft - 1);
        if (stairsLeft >= 2) rFunc(stairsLeft - 2);
        return;
    }
    rFunc(n);
    return count;
}

console.log(countStairs(8));

module.exports = countStairs;
