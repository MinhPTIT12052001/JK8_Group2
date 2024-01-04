function giaDien() {
    var x = prompt("Nhap x:")

    if(x > 0 && x < 50) {
        console.log("Gia dien: ", 1806*x)
    } else if (x < 100) {
        console.log("Gia dien: ", 1866*x)
    } else if (x < 200) {
        console.log("Gia dien: ", 2167*x)
    } else if (x < 300) {
        console.log("Gia dien: ", 2729*x)
    } else if (x < 400) {
        console.log("Gia dien: ", 3050*x)
    } else {
        console.log("Gia dien: ", 3151*x)
    }
}