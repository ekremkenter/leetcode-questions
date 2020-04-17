import { expect } from "chai";

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits: Array<number>) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  return [1, ...digits];
};

it("Test plusOne", function() {
  expect(plusOne([0])).deep.eq([1]);
  expect(plusOne([9])).deep.eq([1, 0]);
  expect(plusOne([9, 9])).deep.eq([1, 0, 0]);
  expect(plusOne([9, 9, 7])).deep.eq([9, 9, 8]);
  expect(plusOne([4, 3, 2, 1])).deep.eq([4, 3, 2, 2]);
  expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).deep.eq([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
});