var n = prompt("Nhap so nguyen n: ")

function isInteger(n) {
    if(n%2 === 1 || n%2 === 0) {
        return true
    } else {
        return false
    }        
}

function isNguyenDuong(n) {
    if(isInteger(n)) {
        if(n > 0) {
            console.log(n, "la so nguyen duong")
        } else {
            console.log(n, "la so nguyen am")
        }
    } else {
        console.log(n, "khong phai so nguyen")
    }
}

isNguyenDuong(n)