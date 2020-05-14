// function removeItemFromArray(arr: number[], item: number): number[] {
//   const index = arr.findIndex((i) => i === item);
//   arr.splice(index, 1);
//   return arr;
// }

// removeItemFromArray([1, 2, 3], 2);

function removeItemFromArray2(ary: Array<number>, item: number): Array<number> {
  const index = ary.findIndex((a: number) => a === item);
  ary.splice(index, 1);
  return ary;
}

removeItemFromArray2([1, 2, 3], 2);
