/**
 *  I have an array stock_prices_yesterday where:
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

function bestProfit(stock_prices_yesterday) {
  // check for valid input
  if (Array.isArray(stock_prices_yesterday) === false) return 0;

  // set a var to store curr max profit
  let maxProfit = 0;

  // set a var to store curr min value
  let minValue = stock_prices_yesterday[0];
  // loop over arr, updating max profit
  for (let i = 1; i < stock_prices_yesterday.length; i++) {
    minValue = Math.min(minValue, stock_prices_yesterday[i]);
    maxProfit = Math.max(maxProfit, stock_prices_yesterday[i] - minValue);
  }
  // return max profit
  return maxProfit;
}

const stockPrices = [3, 6, 1, 4, 8];
console.log(bestProfit(stockPrices)); // -> 7

module.exports = bestProfit;
