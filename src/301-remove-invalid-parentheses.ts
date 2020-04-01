import { expect } from "chai";

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  console.log(s);
  return ["()()()", "(())()"];
};

it("test removeInvalidParentheses", function() {
  expect(removeInvalidParentheses("()())()")).to.deep.eq(["()()()", "(())()"]);
  expect(removeInvalidParentheses("(a)())()")).to.deep.eq([["(a)()()", "(a())()"]]);
  expect(removeInvalidParentheses(")(")).to.deep.eq([[""]]);
});