import numbers from "../data/numbers.json";
import tens from "../data/tens.json";
import prefixes from "../data/prefixes.json";

const addNumbersAndPrefixes = (
  digit: number,
  distance: number,
  word: string,
  pos: number
): string => {
  return digit === 0 && (word.trim().endsWith("on") || pos === 0)
    ? numbers[digit]
    : numbers[digit] + prefixes[distance / 3];
};

const addTens = (pos: number, digit: number, next: number): string => {
  return pos > 0 && (digit !== 0 || next !== 0)
    ? "and " + tens[digit]
    : tens[digit];
};

const addHundreds = (digit: number): string => {
  return digit === 0 ? "" : numbers[digit] + "hundred ";
};

const tidyUp = (word: string): string => {
  word = word.trim();
  if (word.endsWith("-")) word = word.slice(0, -1);
  return word;
};

export function replaceNumbersWithWords(arrayOfNumbers: number[]): string {
  let numberAsWords = "";

  for (let pos = 0; pos < arrayOfNumbers.length; pos++) {
    const distanceFromLastDigit = arrayOfNumbers.length - 1 - pos;
    const currentDigit = arrayOfNumbers[pos];
    const nextDigit = arrayOfNumbers[pos + 1];
    switch (distanceFromLastDigit % 3) {
      case 0:
        numberAsWords += addNumbersAndPrefixes(
          currentDigit,
          distanceFromLastDigit,
          numberAsWords,
          pos
        );
        break;
      case 1:
        numberAsWords += addTens(pos, currentDigit, nextDigit);
        break;
      case 2:
        numberAsWords += addHundreds(currentDigit);
        break;
    }
  }
  numberAsWords = tidyUp(numberAsWords);

  return numberAsWords;
}
