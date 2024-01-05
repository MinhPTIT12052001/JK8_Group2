let m1 = [2,3,5,8,6,9,6,7,1];
function sum(arr){
    let sum = 0;
    arr.map(function(value){
        sum += value;
    });
    return sum;
}

console.log(sum(m1));