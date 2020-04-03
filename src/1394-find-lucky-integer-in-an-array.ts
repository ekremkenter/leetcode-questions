import { expect } from "chai";

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr: Array<number>) {
  const numberCountMap = new Map();
  arr.forEach(number => {
    if (numberCountMap.has(number)) {
      numberCountMap.set(number, numberCountMap.get(number) - 1);
    } else {
      numberCountMap.set(number, number - 1);
    }
  });
  const luckyNumbers = arr.filter(value => numberCountMap.get(value) === 0);
  return Math.max(...luckyNumbers, -1);
};

it("test findLucky", function() {
  expect(findLucky([1])).eq(1);
  expect(findLucky([1, 1])).eq(-1);
  expect(findLucky([2, 2])).eq(2);
  expect(findLucky([2, 2, 3, 3, 3])).eq(3);
  expect(findLucky([2, 2, 3, 4])).eq(2);
  expect(findLucky([1, 2, 2, 3, 3, 3])).eq(3);
  expect(findLucky([2, 2, 2, 3, 3])).eq(-1);
  expect(findLucky([5])).eq(-1);
  expect(findLucky([7, 7, 7, 7, 7, 7, 7])).eq(7);
});