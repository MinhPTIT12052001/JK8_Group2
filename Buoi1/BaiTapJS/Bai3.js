function isSquare() {
    var x = prompt("Nhap x = ")

    a = Math.sqrt(x)
    
    if(isInteger(a)) {
        console.log(x, "la so chinh phuong")
    } else {
        console.log(x, "khong phai so chinh phuong")
    }  
}

