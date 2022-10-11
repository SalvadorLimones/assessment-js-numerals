export function convertToBritish(array: number[]): number[] {
  const betweenThousandAndTwoThousand = array.length === 4 && array[0] === 1;
  if (betweenThousandAndTwoThousand) {
    //moves the thousand value to the hundreds value
    // [1,9,8,5] => [0,19,8,5]
    array.splice(0, 2, 0, array[0] * 10 + array[1]);
  }
  return array;
}
