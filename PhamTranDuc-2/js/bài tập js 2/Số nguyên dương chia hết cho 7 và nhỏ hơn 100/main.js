function kiemTraChiaHetCho7(a) {
  if (a % 7 == 0) {
    return true;
  }
  return false;
}

for (i = 7; i < 100; i++) {
  if (kiemTraChiaHetCho7(i)) {
    console.log(i);
  }
}
