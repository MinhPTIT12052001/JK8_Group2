function isSNT() {
    var x = prompt("Nhap x: ")

    var count = 0;

    for(i=2; i<Math.sqrt(x); i++) {
        if(x % i == 0) {
            count++;
        }
    }

    if(count===0) {
        console.log(x, "la so nguyen to")
    } else {
        console.log(x, "khong phai so nguyen to")
    }
}