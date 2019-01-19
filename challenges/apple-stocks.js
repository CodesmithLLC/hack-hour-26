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
 * function bestProfit(stockPricesYesterday) {
  let maxProfit = 0;
  let possibleProfit = 0;
  let minI = 0;
  if (stockPricesYesterday) {
    for (let i = 0; i < stockPricesYesterday.length; i++) {
      if (stockPricesYesterday[i] < stockPricesYesterday[minI]) {
        minI = i;
      }

      possibleProfit = stockPricesYesterday[i] - stockPricesYesterday[minI];

      if (possibleProfit > maxProfit) {
        maxProfit = possibleProfit;
      }
    }
  }
  return maxProfit;
}
 */

function bestProfit(stock_prices_yesterday) {

}

module.exports = bestProfit;
