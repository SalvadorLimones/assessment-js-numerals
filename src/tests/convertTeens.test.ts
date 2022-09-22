import { convertTeens } from "../utilities/convertTeens";
import { describe, expect, it } from "vitest";

describe("converting consecutive numbers [1,1],[1,2],...[1,8],[1,9] in the right place of the array to the correct format [0,11],[0,12]....", () => {
  it("returns the array [0,11] for the input array [1,1] and number 2", () => {
    expect(convertTeens([1, 1], 2)).toEqual([0, 11]);
  });
  it("returns the array [1,1,0,11] for the input array [1,1,1,1] and number 2", () => {
    expect(convertTeens([1, 1, 1, 1], 2)).toEqual([1, 1, 0, 11]);
  });
  it("returns the array [0,11,0,11] for the input array [1,1,0,11] and number 4", () => {
    expect(convertTeens([1, 1, 0, 11], 4)).toEqual([0, 11, 0, 11]);
  });
});
