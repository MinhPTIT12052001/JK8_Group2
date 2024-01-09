var productList = [
    { id: 1, name: "Máy tính", price: 45, quantity: 5 },
    { id: 2, name: "Quần áo", price: 45, quantity: 5 },
    { id: 3, name: "Bút", price: 45, quantity: 5 },
    { id: 4, name: "Thước", price: 45, quantity: 5 },
    { id: 5, name: "Tẩy", price: 45, quantity: 5 },
];
function sum(price, number) {
    return price * number;
}
function totalSum(total, sum) {
    return total + sum;
}
var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
console.log("Total is: " + total);
