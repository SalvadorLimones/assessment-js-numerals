import { replaceNumbersWithWords } from "./replaceNumbersWIthWords";

export function convertNumber(number: number): string {
  const arrayOfNumbers = String(number)
    .split("")
    .map((str) => Number(str));

  for (let num = arrayOfNumbers.length - 2; num >= 0; num -= 3) {
    if (arrayOfNumbers[num] === 1) {
      arrayOfNumbers.splice(
        num,
        2,
        0,
        arrayOfNumbers[num] * 10 + arrayOfNumbers[num + 1]
      );
    }
  }
  return replaceNumbersWithWords(arrayOfNumbers);
}
