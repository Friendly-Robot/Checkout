/**
 * @format
 */

import { fixed, x100, sum } from "../moneyUtils";

describe("moneyUtils functions", () => {
  it("should multiple a number value by 100 when calling x100(num)", () => {
    const num = 100;
    expect(x100(num)).toEqual(10000);
  });

  it("should return the argument if number is not a number when callling x100(string)", () => {
    const str = "100";
    expect(x100(str)).toEqual(str);
  });

  it("should return a float rather than a string when called fixed(num)", () => {
    const num = 100;
    const toFixedNum = num.toFixed(2);
    const fixedNum = fixed(x100(num));
    expect(fixedNum).not.toEqual(toFixedNum);
    expect(fixedNum).toEqual(100.00);
  });

  it("should sum up all values passed in arguments and return a toFixed(2) value when calling sum(...args)", () => {
    expect(sum(1, -1)).toEqual(0.00);
  });
});
