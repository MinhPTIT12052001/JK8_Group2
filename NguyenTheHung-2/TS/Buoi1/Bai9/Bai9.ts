type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  
function createProducts(): Product[] {
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


const products = createProducts();
  
// Tính tổng giá trị của tất cả sản phẩm
const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  
// Lọc ra các sản phẩm có giá lớn hơn 100
const expensiveProducts = products.filter((product) => product.price > 100);
  
const productDescriptions = products.map((product) => `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`);

function countProductsUnder100(products: Product[]): number {
    return products.reduce((count, product) => {
      if (product.price < 100) {
        count += product.quantity;
      }
      return count;
    }, 0);
}

function getDiscountProducts(products: Product[], discount: number): Product[] {
    return products.map((product) => {
      return {
        ...product,
        price: product.price * (1 - discount / 100),
      };
    });
  }
  



  
console.log("Tổng giá trị: ", totalPrice);
console.log("Các sản phẩm có giá trên 100\n", expensiveProducts);
console.log("Mô tả sản phẩm\n", productDescriptions);
const cntProductsUnder100 = countProductsUnder100(products);
console.log("Tổng số lượng sản phẩm có giá dưới 100\n", cntProductsUnder100);
const discountedProducts = getDiscountProducts(products, 20);
console.log("Danh sách sản phẩm được Discount\n", discountedProducts);
  