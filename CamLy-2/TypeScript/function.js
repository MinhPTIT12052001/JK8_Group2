"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ktraSNT = exports.giaiThua = void 0;
function giaiThua(n) {
    var result = 1;
    for (var i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
exports.giaiThua = giaiThua;
function ktraSNT(n) {
    if (n < 2)
        return false;
    if (n == 2)
        return true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
exports.ktraSNT = ktraSNT;
