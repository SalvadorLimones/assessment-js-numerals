import { replaceNumbersWithWords } from "./replaceNumbersWIthWords";

export function convertNumberToArray(number: number): string {
  console.log("A szám: ", number);

  const arrayOfNumbers = String(number)
    .split("")
    .map((str) => Number(str));
  console.log("EREDETI: ", arrayOfNumbers);
  for (let num = arrayOfNumbers.length - 2; num >= 0; num -= 3) {
    if (arrayOfNumbers[num] === 1) {
      console.log("kapás van!");
      arrayOfNumbers.splice(
        num,
        2,
        0,
        arrayOfNumbers[num] * 10 + arrayOfNumbers[num + 1]
      );
    }
    console.log("Átalakítva: ", arrayOfNumbers);
  }
  return replaceNumbersWithWords(arrayOfNumbers);
}
