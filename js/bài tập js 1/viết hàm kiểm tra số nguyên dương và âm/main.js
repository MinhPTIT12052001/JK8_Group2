let a = prompt("Nhập vào số cần kiểm tra :");
let a1 = parseFloat(a);
function check(x) {
  if (Number.isInteger(x)) {
    if (x >= 0) {
      alert("số nguyên dương");
      return;
    }
    alert("số nguyên âm");
    return;
  }
  alert("không là kiểu số nguyên");
  return;
}

console.log(check(a1));
