// Bài 1:
function tinhTong(){
    let inputA = document.getElementById("a")
    let inputB = document.getElementById("b")

    let a = parseInt(inputA.value)
    let b = parseInt(inputB.value)

    let c = a + b;
    console.log("Kết quả : " + c);
}
//Bài 2:
class SinhVien{
    constructor(ten, tuoi, gioiTinh, ngaySinh){
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.ngaySinh = ngaySinh;
    }
    getInfo(){
        console.log("Name : " + this.ten);
    }
    setName(name){
        this.ten = name;
    }
}
let sv = new SinhVien('Minh',22,'nam','12/05/2001');
sv.getInfo()
console.log(sv)
