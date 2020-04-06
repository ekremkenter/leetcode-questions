import { expect } from "chai";

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1])
      profit += prices[i] - prices[i - 1];
  }
  return profit;
};

it("test maxProfit", function() {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).eq(7);
  expect(maxProfit([1,2,5])).eq(4);
  expect(maxProfit([1,5])).eq(4);
  expect(maxProfit([5,1])).eq(0);
  expect(maxProfit([5])).eq(0);
});