export function convertTeens(array: number[]): number[] {
  //moves the tens values to the ones if value is 1
  // [1,0,1,5] => [1,0,0,15]
  // [2,2,1,3,0,1,5] => [2,2,0,13,0,0,15]
  for (
    let positionOfTens = array.length - 2;
    positionOfTens >= 0;
    positionOfTens -= 3
  ) {
    if (array[positionOfTens] === 1) {
      array.splice(
        positionOfTens,
        2,
        0,
        array[positionOfTens] * 10 + array[positionOfTens + 1]
      );
    }
  }

  return array;
}
