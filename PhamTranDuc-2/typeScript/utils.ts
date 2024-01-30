export function tinhGiaiThua(input: number): number {
  if (input === 1 || input == 0) {
    return 1;
  } else {
    return input * tinhGiaiThua(--input);
  }
}

export function kiemTraSoNguyenTo(input: number): boolean {
  if (input <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
