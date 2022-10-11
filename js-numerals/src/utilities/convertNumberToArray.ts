import { convertTeens } from "./convertTeens";
import { convertToBritish } from "./convertToBritish";

export function convertNumberToArray(
  number: number,
  british: boolean
): number[] {
  let arrayOfNumbers = String(number)
    .split("")
    .map((str) => Number(str));

  if (arrayOfNumbers.length > 1) arrayOfNumbers = convertTeens(arrayOfNumbers);
  if (british) arrayOfNumbers = convertToBritish(arrayOfNumbers);

  return arrayOfNumbers;
}
