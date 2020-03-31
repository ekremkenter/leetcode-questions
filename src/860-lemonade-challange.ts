import { expect } from "chai";

// @ts-ignore
var lemonadeChangeFirstTry = function(bills) {
  const changeMap = new Map([[5, 0], [10, 0], [20, 0]]);
  for (const bill of bills) {
    if (bill === 5) {
      changeMap.set(bill, changeMap.get(bill) + 1);
    } else if (bill === 10) {
      const dolars5 = changeMap.get(5);
      if (dolars5 > 0) {
        changeMap.set(bill, changeMap.get(bill) + 1);
        changeMap.set(5, changeMap.get(5) - 1);
      } else {
        return false;
      }
    } else if (bill === 20) {
      //check 10+5
      const dolars5 = changeMap.get(5);
      const dolars10 = changeMap.get(10);
      if (dolars5 > 0 && dolars10 > 0) {
        changeMap.set(bill, changeMap.get(bill) + 1);
        changeMap.set(5, changeMap.get(5) - 1);
        changeMap.set(10, changeMap.get(10) - 1);
      } else if (dolars5 > 2) {
        changeMap.set(bill, changeMap.get(bill) + 1);
        changeMap.set(5, changeMap.get(5) - 3);
      } else {
        return false;
      }
    }

  }
  return true;
};

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let dolar5Count = 0;
  let dolar10Count = 0;
  for (const bill of bills) {
    if (bill === 5) {
      dolar5Count++;
      continue;
    } else if (bill === 10) {
      dolar5Count--;
      dolar10Count++;
    }else if (bill === 20) {
      if(dolar10Count){
        dolar10Count--;
        dolar5Count--;
      }else{
        dolar5Count -=3;
      }
    }
    if(dolar5Count<0){
      return false;
    }
  }
  return true;
};

it("test lemonadeChange", function() {
  expect(lemonadeChange([5, 5, 5, 10, 20])).to.eq(true);
  expect(lemonadeChange([5, 5, 10])).to.eq(true);
  expect(lemonadeChange([10, 10])).to.eq(false);
  expect(lemonadeChange([5, 5, 10, 10, 20])).to.eq(false);
});