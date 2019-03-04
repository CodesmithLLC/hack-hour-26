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
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  const counts = [1, 2, 3, 5, 8, 13];

  if (Number.isNaN(n)) return undefined;
  if (n <= counts.length) return counts[n];
  // number not in our current pattern, need to extend to length n
  // fibonacci style!
  while (counts.length < n) {
    const end = counts.length - 1;
    const next = counts[end] + counts[end - 1];
    counts.push(next);
  }

  return counts[n - 1];
}

console.log(`21: ${countStairs(7)}`);
console.log(`377: ${countStairs(13)}`);

module.exports = countStairs;
