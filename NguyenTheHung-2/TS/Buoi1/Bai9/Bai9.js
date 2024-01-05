var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createProducts() {
    return [
        {
            id: 1,
            name: "Sản phẩm 1",
            price: 100,
            quantity: 10,
        },
        {
            id: 2,
            name: "Sản phẩm 2",
            price: 50,
            quantity: 20,
        },
        {
            id: 3,
            name: "Sản phẩm 3",
            price: 300,
            quantity: 30,
        },
        {
            id: 4,
            name: "Sản phẩm 4",
            price: 170,
            quantity: 10,
        },
        {
            id: 5,
            name: "Sản phẩm 5",
            price: 80,
            quantity: 11,
        }
    ];
}
var products = createProducts();
// Tính tổng giá trị của tất cả sản phẩm
var totalPrice = products.reduce(function (sum, product) { return sum + product.price * product.quantity; }, 0);
// Lọc ra các sản phẩm có giá lớn hơn 100
var expensiveProducts = products.filter(function (product) { return product.price > 100; });
var productDescriptions = products.map(function (product) { return "S\u1EA3n ph\u1EA9m ".concat(product.name, " c\u00F3 gi\u00E1 ").concat(product.price, " \u0111\u1ED3ng v\u00E0 c\u00F2n ").concat(product.quantity, " s\u1EA3n ph\u1EA9m."); });
function countProductsUnder100(products) {
    return products.reduce(function (count, product) {
        if (product.price < 100) {
            count += product.quantity;
        }
        return count;
    }, 0);
}
function getDiscountProducts(products, discount) {
    return products.map(function (product) {
        return __assign(__assign({}, product), { price: product.price * (1 - discount / 100) });
    });
}
console.log("Tổng giá trị: ", totalPrice);
console.log("Các sản phẩm có giá trên 100\n", expensiveProducts);
console.log("Mô tả sản phẩm\n", productDescriptions);
var cntProductsUnder100 = countProductsUnder100(products);
console.log("Tổng số lượng sản phẩm có giá dưới 100\n", cntProductsUnder100);
var discountedProducts = getDiscountProducts(products, 20);
console.log("Danh sách sản phẩm được Discount\n", discountedProducts);
