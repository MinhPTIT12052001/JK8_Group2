let m1 = [2, 3, 5, 8, 6, 9, 6, 7, 1];
let sumTmp = 0;
for (i = 0; i < m1.length; i++) {
  sumTmp = sumTmp + m1[i];
}
console.log(sumTmp);
let sum = m1.reduce((pre, current) => pre + current, 0);

console.log(sum);
