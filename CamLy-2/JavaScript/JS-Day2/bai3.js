function checkPrimeNumber(n){
    if(n < 2) return false;
    if(n == 2) return true;
    for(i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

let x = prompt("Nhập số");
console.log(checkPrimeNumber(x) ? "Số nguyên tố" : "Không là số nguyên tố");