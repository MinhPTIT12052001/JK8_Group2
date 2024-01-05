function getFirstElement<T>(array: T[]): T | undefined {
    if (array.length > 0) {
      return array[0];
    }
    return undefined;
  }
const number = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(number);
console.log(firstNumber); 

const names = ["Minh", "Linh", "Phuong"];
const firstName = getFirstElement(names);
console.log(firstName); 