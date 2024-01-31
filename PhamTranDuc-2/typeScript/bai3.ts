function filterFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const arr1: string[] = ['Pham', 'Tran', 'Duc'];
console.log(filterFirstElement(arr1));
