class Product{
    id: number;
    name: string;
    price: number;
    quantity: number

    constructor(name: string){
        this.name = name;
    }
}

const callApiProduct = async (url : string) : Promise<Array<Product>> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let lstProduct : Array<Product>;


(async () => {
    try {
        lstProduct = await callApiProduct("http://localhost:3000/Product");

    } catch (e) {
        console.log("Error occurred:", e);
    }
})().then(() =>{

    console.log(tinhProductNhanQuantity(lstProduct));
    
    let listProducts = lstProduct.filter((p) => p.price < 100);
    console.log(listProducts) ;

   let lstArrayDes : Array<string> = lstProduct.map((p) => "San pham " + p.name + " co gia " + p.price +" va con " + p.quantity + " san pham");
   console.log(lstArrayDes);

   let soLuongSanPhamCoGiaDuoi100 : number = lstProduct.filter((p) => p.price < 100).reduce((sum,cur) => sum + Number(cur.quantity), 0);
   console.log(soLuongSanPhamCoGiaDuoi100);

   console.log(giamGiaSanPham(lstProduct, 0.5));

});


const tinhProductNhanQuantity = (lst: Array<Product>) : number => {
    const sumWithInitial = lstProduct.reduce(
        (sum, currentValue) => sum + (currentValue.price* currentValue.quantity),
        0,
      );
    return sumWithInitial;
}

const giamGiaSanPham = (lst: Array<Product> , rateGiamGia : number) : Array<Product> => {
    let lstProductgg : Array<Product> = lst.map((p) =>{p.price = p.price * rateGiamGia; return p;});

    return lstProductgg;
}


