type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

//1
const productList: Product[] = [
    {id:1, name:"Máy tính", price: 150, quantity:5},
    {id:2, name:"Quần áo", price: 20, quantity:5},
    {id:3, name:"Bút", price: 5, quantity:5},
    {id:4, name:"Thước", price: 200, quantity:5},
    {id:5, name:"Tẩy", price: 40, quantity:15},
];

//2
const totalSum: number = productList.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
}, 0);

console.log("Tổng giá trị = " + totalSum);

//3
const list: Product[] = productList.filter((product) => {
    return product.price > 100;
})

console.log("Sản phẩm có giá trị > 100: ");
console.log(list);

// for(let i = 0; i < list.length; i++){
//     console.log(list[i].id);
// }

//5
let sumQty: number = productList.reduce((total, product) => {
    if(product.price < 100){
        total += product.quantity;
    }
    return total;
}, 0);
console.log("Tổng số lượng sản phẩm có giá dưới 100:  " + sumQty);

//4
let newArray = productList.map(function(product){
    return `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm`;
})

console.log(newArray);

//6
function getDiscountedProducts(productList: Product[], sale: number){
    return productList.map(function(product){
        return product.price -= product.price * sale / 100;
    })
}

getDiscountedProducts(productList, 10);
console.log(productList);




