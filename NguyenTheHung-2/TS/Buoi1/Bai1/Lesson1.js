var arr = [1, 2, 3, 4];
function sum(a) {
    var total = 0;
    a.forEach(function (num) { return total += num; });
    return total;
}
console.log(sum(arr));
