"use strict";
// file: util.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = exports.factorial = void 0;
function factorial(n) {
    if (n < 0) {
        throw new Error("n phải là số nguyên dương");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.factorial = factorial;
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
exports.isPrime = isPrime;
