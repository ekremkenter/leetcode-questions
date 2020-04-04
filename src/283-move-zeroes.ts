import { expect } from "chai";

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else if (zeroCount > 0) {
      nums[i - zeroCount] = nums[i];
      nums[i] = 0;
    }
    if (i + zeroCount >= nums.length) {
      nums[i] = 0;
    }
  }
};

it("test moveZeroes", function() {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 3, 12, 0, 0]);

  nums = [0, 1, 0, 1, 0, 2, 3, 12];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 1, 2, 3, 12, 0, 0, 0]);

  nums = [0, 1, 0];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 0, 0]);

  nums = [1];
  moveZeroes(nums);
  expect(nums).deep.eq([1]);

  nums = [1, 1];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 1]);

  nums = [1, 0];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 0]);

  nums = [1, 0, 1];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 1, 0]);
});