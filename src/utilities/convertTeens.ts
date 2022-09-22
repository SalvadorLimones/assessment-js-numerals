export function convertTeens(array: number[], twoOrFour: number): number[] {
  for (let num = array.length - twoOrFour; num >= 0; num -= 3) {
    if (array[num] === 1) {
      array.splice(num, 2, 0, array[num] * 10 + array[num + 1]);
    }
  }

  return array;
}
