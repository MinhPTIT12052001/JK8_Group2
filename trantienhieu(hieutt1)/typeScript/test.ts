
function sumArray(numbers: number[]): number {
    
    return numbers.reduce((total, current) => total + current, 0);
  }

function sumArray2(arrs: number[]): number{
    var sum =0;
    for(let i=0; i<arrs.length;i++){
        sum+= arrs[i];
    }

    return sum;
}

  const numbersArray: number[] = [1, 2, 3, 4];
  const result: number = sumArray(numbersArray);

  console.log(`Sum of the array: ${result}`);
  