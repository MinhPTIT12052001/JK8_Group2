// Bài 1:  Viết hàm tính tiền điện theo giá bậc thang, với đầu vào là số điện đã tiêu thụ, đầu ra là số tiền phải trả.
function tinhGiaDien() {
    let x = prompt("Nhap x:")

    if(x > 0 && x < 50) {
        console.log("Giá điện phải trả : ", 1806*x)
    } else if (x < 100) {
        console.log("Giá điện phải trả : ", 1866*x)
    } else if (x < 200) {
        console.log("Giá điện phải trả : ", 2167*x)
    } else if (x < 300) {
        console.log("Giá điện phải trả : ", 2729*x)
    } else if (x < 400) {
        console.log("Giá điện phải trả : ", 3050*x)
    } else {
        console.log("Giá điện phải trả : ", 3151*x)
    }
}

  // Bài 2: viết vòng lặp in ra tất cả các số nguyên dương chia hết cho 7 và nhỏ hơn 100
  function loop(){
    for (let i = 0; i <= 100; i++) {
        if(i % 7 === 0){
            console.log(i);
        }
      }
  }

  // Bài 3:  viết hàm kiểm tra số nguyên tố:
  function isPrime(){
    let n = prompt("Nhập số tự nhiên: ");
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            count++;
        }
    }
    
    if(count === 0){
        console.log(n + " là số nguyên tố")
    } else {
        console.log(n + " không phải là số nguyên tố")
    }
  }


