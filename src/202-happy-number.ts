import { expect } from "chai";

var isHappyFirstTry = function(n: number) {
  if (n === 1) {
    return true;
  }
  const number = `${n}`
    .split("")
    .map(digit => Math.pow(parseInt(digit), 2))
    .reduce((acc, currentValue) => acc + currentValue);
  console.log(number);
  return isHappyFirstTry(number);
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n: number) {
  const seenNumbers = new Set();
  while (!seenNumbers.has(n)) {
    if (n === 1) {
      return true;
    }
    seenNumbers.add(n);
    n = `${n}`
      .split("")
      .map(digit => Math.pow(parseInt(digit), 2))
      .reduce((acc, currentValue) => acc + currentValue);
  }
  return false;
};

it("test isHappy", function() {
  expect(isHappy(1)).to.eq(true);
  expect(isHappy(19)).to.eq(true);
  expect(isHappy(2)).to.eq(false);
  expect(isHappy(3)).to.eq(false);
});
