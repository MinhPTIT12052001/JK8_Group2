type Product = {
    id: number;
    name: string;
    price: number;
    quanlity: number;
};
// 1. Tạo một danh sách sản phẩm(productList) chứa ít nhất 5 sản phẩm với các thuộc tính tương ứng.
const productList = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 10,
    },
    {
      id: 3,
      name: "Product 3",
      price: 150,
      quantity: 3,
    },
    {
      id: 4,
      name: "Product 4",
      price: 8,
      quantity: 7,
    },
    {
      id: 5,
      name: "Product 5",
      price: 25,
      quantity: 2,
    },
  ];
  
  console.log(productList);
  // 2. Sử dụng reduce để tính tổng giá trị(price * quantity) của tất cả các sản phẩm trong danh sách.

  const totalValue = productList.reduce((acc,product) => acc + (product.price * product.quantity),0);
  console.log("Kết quả:",totalValue);

  // 3. sử dụng filter để lọc ra các sản phẩm có giá lớn hơn 100.

  const filterValue = productList.filter( product => {
    return product.price <= 100;
  })
  console.log(filterValue);
  
  // 4. Sử dụng map để tạo một mảng mới chứa các đoạn mô tả sử dụng template literals,
//    ví dụ: "Sản phẩm [name] có giá [price] đồng và còn [quanlity] sản phẩm" 

const productDescriptions: string[] = productList.map(
    (product) =>
      `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm`
  );
console.log(productDescriptions);

// 5. Sử dụng reduce để tính tổng số lượng tất cả các sản phẩm có giá dưới 100.

const totalProduct = productList.reduce((acc1, product) => {
    if(product.price <= 100){
        return acc1 + product.quantity;
    }
    return acc1;
}, 0);

console.log("Tổng sản phẩm:",totalProduct);

// 6.Tạo một hàm getDiscountedProducts nhận vào một danh sách sản phẩm và một tỷ lệ giảm giá,
//  trả về một danh sách sản phẩm mới có giá giảm theo tỷ lệ đã cho

function getDiscountedProducts(productList: any, discountRate: any) {
  const discountedProducts = productList.map((product: any) => {
    const discountedPrice = product.price * (1 - discountRate);
    return { ...product, price: discountedPrice };
  });

  return discountedProducts;
}
const discountRate = 0.2;

const discountedProducts = getDiscountedProducts(productList,discountRate);
console.log("Danh sách sản phẩm sau giảm giá:",discountedProducts);