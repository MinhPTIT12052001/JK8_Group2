function sumArr(arr: number[]): number {
  const sum: number = arr.reduce((pre, curr) => pre + curr, 0);
  return sum;
}

const arr: number[] = [1, 3, 6, 9];
const sum: number = sumArr(arr);
console.log('Tổng của mảng là : ' + sum);
