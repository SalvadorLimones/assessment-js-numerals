import { convertNumberToArray } from "../utilities/convertNumberToArray";
import { describe, expect, it } from "vitest";

describe("converting the input number to an array of numbers with the correct format", () => {
  it("returns the array [] for the input number 7", () => {
    expect(convertNumberToArray(7, false)).toEqual([7]);
  });

  it("returns the array [0,12] for the input number 12", () => {
    expect(convertNumberToArray(12, false)).toEqual([0, 12]);
  });

  it("returns the array [4,2] for the input number 42", () => {
    expect(convertNumberToArray(42, false)).toEqual([4, 2]);
  });

  it("returns the array [1,9,9,9] for the input number 1999 and boolean false", () => {
    expect(convertNumberToArray(1999, false)).toEqual([1, 9, 9, 9]);
  });

  it("returns the array [0,19,9,9] for the input number 1999 and boolean true", () => {
    expect(convertNumberToArray(1999, true)).toEqual([0, 19, 9, 9]);
  });
});
