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

/**
 * Stock prices is an array. We will want to iterate over the array,
 * always looking for the global minimum and storing that value.
 * for each iteration, we need to check if the difference between the current value
 * and the global minimum is greater then the previous maximum profit that was found
 *  If it is then we should update the maximum profit. At the end of the iterate, we should then
 * return the maximum profit
 */

function bestProfit(stockPrices) {
  if (!Array.isArray(stockPrices)) return 0;
  let maxProfit = 0;
  let minPrice = 0;

  stockPrices.forEach((price, i) => {
    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  });
  return maxProfit;
}

module.exports = bestProfit;
