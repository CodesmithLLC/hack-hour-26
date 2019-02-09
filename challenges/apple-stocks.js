/**
 *  I have an array stock_prices_yesterday where:
 * 
 * indices = time in minutes past 9:30 AM
 * vals = dollar prices
 * []
 * // find the lowest price @time
 * // find the highest price @time
 *   // subtract the former from the latter
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
/**
* I -> arr of prices -> el = price, idx = minutes passed opening time
* O -> biggest difference between elements
* C -> the lesser element needs to appear in the list before (lower index) than the greater one 
* E -> the biggest number won't necssarily figure into the answer
*/

// No mutation, recursive helper >>->

const bestProfit = (stockPrices) => {
  let greatestDiff = 0;
  let i = stockPrices.length - 1;

  return (function calculateDiffs() {
    if (i === 1) return greatestDiff;

    let j = 0;
    while (j < i) {
      const sellPrice = stockPrices[i];
      const buyPrice = stockPrices[j];
      const nextDiff = sellPrice - buyPrice;
      if (nextDiff > greatestDiff) greatestDiff = nextDiff;
      j += 1;
    }

    i -= 1;
    return calculateDiffs();
  }());
};

// Mutation, recursion, no helper
// const bestProfit = (stockPrices, greatestDiff = 0) => {
//   if (stockPrices.length === 1) return greatestDiff;

//   const sellPrice = stockPrices.pop();

//   let i = 0;
//   while (i < stockPrices.length) {
//     const buyPrice = stockPrices[i];
//     const nextDiff = sellPrice - buyPrice;
//     if (nextDiff > greatestDiff) greatestDiff = nextDiff;
//     i += 1;
//   }

//   return bestProfit(stockPrices, greatestDiff);
// };

const stockPrices = [70, 734, 40, 800, 500, 4, 568, 723, 50];
console.log('Apple Stocks!')
console.log(bestProfit(stockPrices));


// module.exports = bestProfit;
