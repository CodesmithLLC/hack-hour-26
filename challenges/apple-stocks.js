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

function bestProfit(prices) {
  // handle invalid inputs
  if (!Array.isArray(prices) || prices.length <= 0) return 0;
  // initialize objects, min, cache
  // min = { index: 0 and value: prices[0] }
  // cache stores profit: 0, and indexes for the prices that made that profit;
  const min = {
    price: prices[0],
    index: 0,
  };

  const cache = {
    buyAt: 0,
    sellAt: 0,
    profit: 0,
  };


  // traverse the all elements in the array
  prices.forEach((price, index) => {
    // track current minimum price
    if (price < min.price) {
      min.price = price;
      min.index = index;
    }
    const profitVsMin = price - min.profit;
    const profitVsPrevBuy = price - cache.profit;

    // calculate profit vs cached min
    //   better profit? -> update cached values
    if (profitVsPrevBuy > cache.profit) {
      cache.profit = profitVsPrevBuy;
      cache.sellAt = index;
    }
    // caculate profit vs current min
    //   better profit? -> update cached values, reset min to current value/ix
    if (profitVsMin > cache.profit) {
      cache.profit = profitVsMin;
      cache.setAt = index;
      cache.buyAt = min.index;
      min.price = price;
      min.index = index;
    }
  });

  // return cached profit
  return cache.profit;
}

module.exports = bestProfit;
