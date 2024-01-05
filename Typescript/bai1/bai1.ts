function calculateSum(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log(sum); // Kết quả: 15
