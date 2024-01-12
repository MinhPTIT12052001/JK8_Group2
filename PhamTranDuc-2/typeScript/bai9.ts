type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
let productsList: Product[] = [
  { id: 1, name: 'Iphone13', price: 1000, quantity: 2 },
  { id: 2, name: 'MacbookPro2022', price: 2000, quantity: 10 },
  { id: 3, name: 'LenovoLegion5', price: 2200, quantity: 16 },
  { id: 4, name: 'HeadPhoneIphone', price: 99, quantity: 2 },
  { id: 5, name: 'HeadPhoneSamSung', price: 80, quantity: 1 },
];
// 2. Tính tổng các giá trị của sản phẩm trong productsList
let sumTotalValue: number = productsList.reduce(
  (previous: number, current: Product) => previous + current.price * current.quantity,
  0,
);

console.log(sumTotalValue);

// 3. Sử dụng filter để lọc các giá trị lớn hơn 100
let filerValueThan100: Product[] = productsList.filter(function (product) {
  let check: Boolean = product.price > 100;
  return check;
});
console.log('Sử dụng filter để lọc các sản phẩm có giá trị lớn hơn 100: ');
console.log(filerValueThan100);

//4. Sử dụng map để chứa các đoạn mô tả sản phẩm
let DescriptionProduct: string[] = productsList.map(function (p: Product) {
  return 'Sản phẩm ' + p.name + ' có giá ' + p.price + ' USD và còn ' + p.quantity + ' sản phẩm';
});
console.log('map chứa các đoạn mô tả sản phẩm: ');
console.log(DescriptionProduct);

//5. Sử dụng Reduce để tính tổng số lượng tất cả các sản phẩm có giá dưới 100;

let totalPriceUnder100: number = productsList.reduce((previous: number, product: Product) => {
  if (product.price < 100) {
    return previous + product.quantity;
  }
  return previous;
}, 0);
console.log('Tổng số lượng các sản phẩm có giá trị dưới 100 Usd là: ' + totalPriceUnder100);

// 6. Tạo 1 hàm getDiscountedProducts nhận vào 1 danh sách các sản phẩm và một tỉ lệ giảm giá và trả về  một danh sách sẩn phẩm mới có giá giảm theo tỉ lệ đã cho.

function getDiscountedProducts(listProducts: Product[], discountPercent: number): Product[] {
  const productsListDiscounted: Product[] = productsList.map(function (product: Product) {
    const product1: Product = {
      id: product.id,
      name: product.name,
      price: product.price - (product.price * discountPercent) / 100,
      quantity: product.quantity,
    };
    return product1;
  });
  return productsListDiscounted;
}

let productsListDiscounted = getDiscountedProducts(productsList, 20);
console.log('Danh sách các sản phẩm với giá mới cập nhập theo DiscountPercent là : ');
console.log(productsListDiscounted);
