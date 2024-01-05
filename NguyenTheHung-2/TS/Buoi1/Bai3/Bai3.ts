function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }

var arr: Array<number> = [1, 2, 3, 4]

const firstElement = getFirstElement<number>(arr);
 
console.log(firstElement); // 1
    