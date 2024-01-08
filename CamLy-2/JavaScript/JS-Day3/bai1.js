let inputA = document.getElementById("a");
let inputB = document.getElementById("b");
let button = document.getElementById("submit");
button.addEventListener('click', function(e){
    let a = inputA.value;
    let b = inputB.value;
    e.preventDefault();
    a = Number(a);
    b = Number(b);
    let tong = a + b;
    console.log("Tổng = " + tong);
})