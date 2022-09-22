import { convertTeens } from "./convertTeens";

export function convertNumberToArray(
  number: number,
  british: boolean
): number[] {
  let arrayOfNumbers = String(number)
    .split("")
    .map((str) => Number(str));

  if (arrayOfNumbers.length > 1)
    arrayOfNumbers = convertTeens(arrayOfNumbers, 2);
  if (arrayOfNumbers.length === 4 && british)
    arrayOfNumbers = convertTeens(arrayOfNumbers, 4);

  return arrayOfNumbers;
}
