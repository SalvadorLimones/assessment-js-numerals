import numbers from "../data/numbers.json";
import decimals from "../data/decimals.json";
import prefixes from "../data/prefixes.json";

export function replaceNumbersWithWords(arrayOfNumbers: number[]): string {
  let numberInWords = "";

  for (let num = 0; num < arrayOfNumbers.length; num++) {
    const distanceFromLastDigit = arrayOfNumbers.length - 1 - num;
    switch (distanceFromLastDigit % 3) {
      case 0:
        numberInWords +=
          distanceFromLastDigit < 3
            ? numbers[arrayOfNumbers[num]]
            : numbers[arrayOfNumbers[num]] +
              prefixes[distanceFromLastDigit / 3];
        break;
      case 1:
        numberInWords += decimals[arrayOfNumbers[num]];
        break;
      case 2:
        numberInWords +=
          arrayOfNumbers[num] === 0
            ? numbers[arrayOfNumbers[num]]
            : numbers[arrayOfNumbers[num]] + "hundred ";
        break;
    }
  }

  return numberInWords;
}
