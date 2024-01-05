function kiemTraNguyenTo(a) {
  if (Number.isInteger(a) == false) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

let a = prompt("Nhập số muốn kiểm tra nguyên tố :");
a = parseInt(a);
if (kiemTraNguyenTo(a)) {
  alert(a + " là số nguyên tố");
  console.log(a + " là số nguyên tố");
} else {
  alert(a + " không là số nguyên tố");
  console.log(a + " không là số nguyên tố");
}
