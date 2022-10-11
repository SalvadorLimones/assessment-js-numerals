import { convertToBritish } from "../utilities/convertToBritish";
import { describe, expect, it } from "vitest";

describe("converting consecutive numbers [1,1],[1,2],...[1,8],[1,9] in the right place of the array to the correct format [0,11],[0,12]....", () => {
  it("returns the array [0,19,9,9] for the input array [1,9,9,9]", () => {
    expect(convertToBritish([1, 9, 9, 9])).toEqual([0, 19, 9, 9]);
  });
});
