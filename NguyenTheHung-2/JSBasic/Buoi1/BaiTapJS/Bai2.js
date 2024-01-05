function giaiPT1() {
    var a = prompt("Nhap he so a = ")
    var b = prompt("Nhap he so b = ")

    if(a === 0) {
        console.log("Phuong trinh vo nghiem")
    } else if(b === 0) {
        console.log("Phuong trinh co vo so nghiem")
    } else {
        console.log("Phuong trinh co nghiem la: ", -b/a)
    }
}