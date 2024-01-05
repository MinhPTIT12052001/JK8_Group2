function check(x) {
  let x1 = Math.sqrt(x);
  return Number.isInteger(x1);
}
let a = prompt("Nhập số cần kiểm tra :");
let t = check(a);
if (t == true) {
  alert(a + " là số chính phương");
  console.log(a + " là số chính phương");
} else {
  alert(a + " không là số chính phương");
  console.log(a + " không là số chính phương");
}
