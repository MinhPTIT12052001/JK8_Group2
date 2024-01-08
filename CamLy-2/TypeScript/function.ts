export function giaiThua(n: number){
    let result:number = 1;
    for(let i = n; i > 0; i--){
        result *= i;
    }
    return result;
}

export function ktraSNT(n: number): boolean{
    if(n < 2) return false;
    if(n == 2) return true;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) return false;
    }

    return true;
}