import { factorial, isPrime } from "./utils";

const number = 5;
const fact = factorial(number);
console.log(`Factorial of ${number} is ${fact}`);

const prime = isPrime(13);
console.log(`Is 13 a prime number ${prime}`);