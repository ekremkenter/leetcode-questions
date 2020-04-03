import { expect } from "chai";

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums: Array<number>) {
  let currentMax = nums[0];
  let allMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    allMax = Math.max(currentMax, allMax);
  }
  return allMax;
};

it("test maxSubArray", function() {
  expect(maxSubArray([2])).eq(2);
  expect(maxSubArray([2, 3])).eq(5);
  expect(maxSubArray([-1, -3])).eq(-1);
  expect(maxSubArray([2, 3, -1])).eq(5);
  expect(maxSubArray([-2, 2, 3, -1])).eq(5);
  expect(maxSubArray([-2, 2, -1, 3, -1])).eq(4);
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).eq(6);
});