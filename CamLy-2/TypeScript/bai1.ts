const numbers = [1,2,3,4];

function getSum(numbers : number[]) : number{
    let sum : number = 0;
    for(let i : number = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

let result : number = getSum(numbers);
console.log(result);