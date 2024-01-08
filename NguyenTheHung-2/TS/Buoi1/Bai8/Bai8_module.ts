// file: util.ts

export function factorial(n: number): number {
    if (n < 0) {
      throw new Error("n phải là số nguyên dương");
    }
  
    if (n === 0) {
      return 1;
    }
  
    return n * factorial(n - 1);
}
  
export function isPrime(n: number): boolean {
    if (n < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
}
  