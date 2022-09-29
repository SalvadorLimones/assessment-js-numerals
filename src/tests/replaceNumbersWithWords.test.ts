import { replaceNumbersWithWords } from "../utilities/replaceNumbersWithWords";
import { describe, expect, it } from "vitest";

describe("replacing numbers from the number array with words", () => {
  it("returns the phrase 'seven' for the number 7, received as an array [7]", () => {
    expect(replaceNumbersWithWords([7])).toBe("seven");
  });

  it("returns the phrase 'forty-two' for the number 42, received as an array [4,2]", () => {
    expect(replaceNumbersWithWords([4, 2])).toBe("forty-two");
  });

  it("returns the phrase 'one thousand nine hundred and ninety-nine' for the number 1999, received as an array [1,9,9,9]", () => {
    expect(replaceNumbersWithWords([1, 9, 9, 9])).toBe(
      "one thousand nine hundred and ninety-nine"
    );
  });

  it("returns the phrase 'two thousand and one' for the number 2001, received as an array [2,0,0,1]", () => {
    expect(replaceNumbersWithWords([2, 0, 0, 1])).toBe("two thousand and one");
  });

  it("returns the phrase 'seventeen thousand nine hundred and ninety-nine' for the number 17999, received as an array [0,17,9,9,9]", () => {
    expect(replaceNumbersWithWords([0, 17, 9, 9, 9])).toBe(
      "seventeen thousand nine hundred and ninety-nine"
    );
  });

  it("returns the phrase 'one hundred thousand and one' for the number 100001, received as an array [1,0,0,0,0,1]", () => {
    expect(replaceNumbersWithWords([1, 0, 0, 0, 0, 1])).toBe(
      "one hundred thousand and one"
    );
  });

  it("returns the phrase 'three hundred and forty-two thousand two hundred and fifty-one' for the number 342251, received as an array [3,4,2,2,5,1]", () => {
    expect(replaceNumbersWithWords([3, 4, 2, 2, 5, 1])).toBe(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
  });

  it("returns the phrase 'one million three hundred thousand four hundred and twenty' for the number 1300420, received as an array [1,3,0,0,4,2,0]", () => {
    expect(replaceNumbersWithWords([1, 3, 0, 0, 4, 2, 0])).toBe(
      "one million three hundred thousand four hundred and twenty"
    );
  });

  it("returns the phrase 'one billion' for the number 1000000000, received as an array [1,0,0,0,0,0,0,0,0,0]", () => {
    expect(replaceNumbersWithWords([1, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(
      "one billion"
    );
  });

  it("returns the phrase 'one billion one million one thousand and one' for the number 1001001001, received as an array [1,0,0,1,0,0,1,0,0,1]", () => {
    expect(replaceNumbersWithWords([1, 0, 0, 1, 0, 0, 1, 0, 0, 1])).toBe(
      "one billion one million one thousand and one"
    );
  });
});
