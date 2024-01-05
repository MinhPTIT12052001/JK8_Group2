// main.ts

// Import các hàm từ module utils.ts
import { factorial, isPrime} from "./tienich";

// Sử dụng hàm tính giai thừa
const resultFactorial = factorial(5);
console.log(`Factorial of 5 is: ${resultFactorial}`);

// Sử dụng hàm kiểm tra số nguyên tố
const numberToCheck = 17;
if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
} else {
    console.log(`${numberToCheck} is not a prime number.`);
}
