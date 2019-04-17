/**
 * @format
 */

import { findIndexOfItem } from "../itemUtils";

describe("itemUtils functions", () => {
  it("should find index of item with findIndexOfItem()", () => {
    const items = [{name: "Bob"}, {name: "Mary"}, {name: "Flanders"}, {name: "Momo"}];
    const findItem = {name: "Momo"};
    const index = findIndexOfItem(items, findItem);
    expect(index).toEqual(3);
  });

  it("should return NaN if item is not found with findIndexOfItem()", () => {
    const items = [{name: "Bob"}, {name: "Mary"}, {name: "Flanders"}, {name: "Momo"}];
    const findItem = {name: "Andy"};
    const index = findIndexOfItem(items, findItem);
    expect(index).toEqual(NaN);
  });

  it("Should return NaN if there are no items passed to findIndexOfItem()", () => {
    const items = [];
    const findItem = {name: "Andy"};
    const index = findIndexOfItem(items, findItem);
    expect(index).toEqual(NaN);
  });

  it("Should return NaN if the item passed to findIndexOfItem() does not contain a name property", () => {
    const items = [{name: "Bob"}, {name: "Mary"}, {name: "Flanders"}, {name: "Momo"}];
    const findItem = {age: 20};
    const index = findIndexOfItem(items, findItem);
    expect(index).toEqual(NaN);
  });
});