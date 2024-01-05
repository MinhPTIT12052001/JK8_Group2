var arr: Array<number> = [1, 2, 3, 4]

function sums(a: number[]):number {
    let total=0;
    a.forEach((num)=>total += num);

    return total
}

console.log(sums(arr))