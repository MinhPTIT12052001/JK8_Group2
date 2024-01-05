
// Bài 1
let name = prompt("Nhập họ và tên: ")
let age = prompt("Nhập tuổi: ")
let phoneNumber = prompt("Nhập số điện thoại: ")

console.log("Họ và Tên: " + name)
console.log("Tuổi : " + age)
console.log("Số điện thoại :" + phoneNumber)

// Bài 2:

let lenght = prompt("Nhập chiều dài: ")
let width = prompt("Nhập chiều rộng: ")
let height = prompt("Nhập chiều cao: ")

let totalArea = 2 * (lenght * width + lenght * height + width * height)

console.log("Diện tích toàn phần: " + totalArea)

// Bài 3: Viết hàm kiểm tra 1 số n có phải số nguyên dương hay là nguyên âm. 
//Gợi ý hàm kiểm tra số nguyên isInteger.
function checkInteger(n){
    if(Number.isInteger(n)){
        if (n > 0) {
            return "Số nguyên dương";
        } else if (n < 0) {
            return "Số nguyên âm";
        } else {
            return "0";
        }
    } else {
        return "Không phải số nguyên";
    }
}
let number = parseFloat(prompt("Nhập 1 số: "))
let ketqua = checkInteger(number);

console.log("Kết quả: " + ketqua);
// Bài 4: Viết hàm giải phương trình bậc nhất ax + b = 0

function GiaiPhuongTrinhBacNhat(a,b) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình vô số nghiệm";
        } else if (b != 0) {
            return "Phương trình vô nghiệm";
        }
    } else {
        let x = -b/a;
        return "Nghiệm của phương trình là: " + x;
    }
}

let a = parseFloat(prompt("Nhập giá trị của a: "))
let b = parseFloat(prompt("Nhập giá trị của b: "))
let x = GiaiPhuongTrinhBacNhat(a,b);
console.log("Kết quả x = " + x);

// Bài 5: Viết hàm kiểm tra số n có phải số chính phương hay không
function find_square_number(n){

    let flag = 0;
    let i = 0;
    while(i <= n){
        if( Math.pow( i, 2) == n ) {   
            flag = 1;
            break; 
        }
        i++;
    }
    return flag;
}
let n= prompt("Nhập số tự nhiên n: ");
let check = find_square_number(n);

if( check == 1 ) console.log(n + " là số chính phương");
else console.log(n + " không phải là số chính phương");

