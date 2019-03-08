/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  const sortedItems = items.sort((a, b) => a.weight > b.weight);
  let result = 0;
  let workingWeight = weightAvailable;
  for (let i = 0; i < sortedItems.length; i++) {
    const cur = sortedItems[i];
    if (workingWeight - cur.weight >= 0) {
      result += cur.value;
      workingWeight -= cur.weight;
    }
  }
  return result;
};

items = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];
console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])


module.exports = solveKnapsack;
