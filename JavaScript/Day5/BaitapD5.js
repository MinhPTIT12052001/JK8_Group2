// Bài 1: cho mảng số nguyên
// let m1 = [2,3,5,8,6,9,6,7,1];
// Không dùng vòng lặp, hãy tính tổng các số nguyên trong mảng

let m1 = [2,3,5,8,6,9,7,1]
let sum = m1.reduce((a,b) => a + b, 0);
console.log('Kết quả: ' + sum);

// BÀi 2: cho mảng ký tự
// let m2 = [‘s’, ‘n’, ‘o’, ‘i’, ‘t’, ‘c’, ‘e’, ‘n’, ‘n’, ‘o’, ‘c’, ‘ ‘, ‘f’, ‘o’, ‘ ‘, ‘l’, ‘l’, ‘u’, ‘f’, ‘ ‘, ‘o’, ‘s’, ‘l’, ‘a’, ‘ ‘, ‘s’, ‘i’, ‘ ‘, ‘t’, ‘i’, ‘ ‘, ‘t’, ‘u’, ‘b’, ‘ ‘, ‘,’, ‘s’, ‘e’, ‘c’, ‘n’, ‘e’, ‘d’, ‘i’, ‘c’, ‘n’, ‘i’, ‘o’, ‘c’, ‘ ‘, ‘f’, ‘o’, ‘ ‘, ‘l’, ‘l’, ‘u’, ‘f’, ‘ ‘, ‘s’, ‘i’, ‘ ‘, ‘e’, ‘s’, ‘r’, ‘e’, ‘v’, ‘i’, ‘n’, ‘u’, ‘ ‘, ‘e’, ‘h’, ‘T’];
// hãy đảo ngược thứ tự của các phần tử trong mảng

// Cách 1: Sử dụng for
let m2 = ['s','n','o','i','t','c','e','n','n','o','c','l','l','u','f','o','b','e']
for(let i=0; i<m2.length / 2; i++){
    let temp = m2[i];
    m2[i] = m2[m2.length - i - 1];
    m2[m2.length - i - 1] = temp;
}
console.log(m2);

// cách 2: sử dụng reverse();
let m22 = ['s','n','o','i','t','c','e','n','n','o','c','l','l','u','f','o','b','e']
m22.reverse();
console.log(m22);

// Bài 3:
// Viết ctr cho phép nhập vào tên người ở dạng bất kỳ, sau đó tiến hành chuẩn hóa tên rồi in ra console
// input: lE thI hUyeN mY
// output: Le Thi Huyen My
function chuanHoaTen(name){
    // xoa khoang trang
    name = name.replace(/\s+/g, " ");
    // chuyen tat ca chu cai sang chu thuong
    name = name.toLowerCase();
    // chuyen chu cai dau moi tu thanh chu hoa
    name = name.replace(/\b([a-z])/g, function(match, group) {
        return group.toUpperCase();
    })
    return name;
}
let nhapTen = prompt("Nhập tên cần chuẩn hoá: ")
let ketQua = chuanHoaTen(nhapTen);
console.log("Tên đã chuẩn hoá: "  + ketQua);