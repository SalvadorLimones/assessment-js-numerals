import numbers from "../data/numbers.json";
import tens from "../data/tens.json";
import prefixes from "../data/prefixes.json";

const addNumbersAndPrefixes = (
  digit: number,
  distance: number,
  pos: number,
  word: string
): string =>
  digit === 0 && (word.trim().endsWith("on") || pos === 0)
    ? numbers[digit]
    : numbers[digit] + prefixes[distance / 3];

const addTens = (
  digit: number,
  distance: number,
  next: number,
  pos: number,
  prev: number
): string =>
  pos > 0 && (digit !== 0 || next !== 0) && (prev !== 0 || distance < 2)
    ? "and " + tens[digit]
    : tens[digit];

const addHundreds = (digit: number): string =>
  digit === 0 ? "" : numbers[digit] + "hundred ";

const tidyUp = (word: string): string => {
  word = word.trim();
  if (word.endsWith("-")) word = word.slice(0, -1);
  return word;
};

export function replaceNumbersWithWords(arrayOfNumbers: number[]): string {
  let numberAsWords = "";

  for (let pos = 0; pos < arrayOfNumbers.length; pos++) {
    const currentDigit = arrayOfNumbers[pos];
    const distanceFromLastDigit = arrayOfNumbers.length - 1 - pos;
    const nextDigit = arrayOfNumbers[pos + 1];
    const prevDigit = arrayOfNumbers[pos - 1];

    switch (distanceFromLastDigit % 3) {
      case 0:
        numberAsWords += addNumbersAndPrefixes(
          currentDigit,
          distanceFromLastDigit,
          pos,
          numberAsWords
        );
        break;
      case 1:
        numberAsWords += addTens(
          currentDigit,
          distanceFromLastDigit,
          nextDigit,
          pos,
          prevDigit
        );
        break;
      case 2:
        numberAsWords += addHundreds(currentDigit);
        break;
    }
  }
  numberAsWords = tidyUp(numberAsWords);

  return numberAsWords;
}
