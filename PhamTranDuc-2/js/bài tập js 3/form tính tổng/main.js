function sum() {
  let a = document.getElementById("inputA");
  let numberA = a.value;
  numberA = parseInt(numberA);
  let b = document.getElementById("inputB");
  let numberB = b.value;
  numberB = parseInt(numberB);
  let kq = numberA + numberB;
  console.log("Kết quả phép tổng là : " + kq);
  alert("Kết quả phép tổng là : " + kq);
}
