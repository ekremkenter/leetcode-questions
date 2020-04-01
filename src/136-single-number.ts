import { expect } from "chai";

// @ts-ignore
var singleNumberFirstTry = function(nums) {
  const numbersMap = new Map();
  nums.forEach(number => {
    if (numbersMap.get(number)) {
      numbersMap.set(number, numbersMap.get(number) + 1);
    } else {
      numbersMap.set(number, 1);
    }
  });
  for (const [key, value] of numbersMap.entries()) {
    if (value === 1) {
      return key;
    }
  }
};

var singleNumber = function(nums) {
  const numbersSet = new Set();
  for (const number of nums) {
    if (numbersSet.has(number)) {
      numbersSet.delete(number);
    } else {
      numbersSet.add(number);
    }
  }
  return numbersSet.values().next().value;
};

it("test single number", function() {
  expect(singleNumber([2, 2, 1])).to.eq(1);
  expect(singleNumber([4, 1, 2, 1, 2])).to.eq(4);
  expect(singleNumber([4, 1, 2, 1, 2, 4, 3])).to.eq(3);
});