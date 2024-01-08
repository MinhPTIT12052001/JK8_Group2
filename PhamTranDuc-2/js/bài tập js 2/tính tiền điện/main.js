let soDien = prompt("Nhập số điện đã tiêu thụ :");
soDien = parseInt(soDien);
let tienDien = tinhTienDien(soDien);
let tienVAT = tienDien / 10;
let tienPhaiTra = tienDien + tienVAT;
console.log("Tiền điện phải trả là :" + tienPhaiTra);
alert("Số tiền điện phải trả là :" + tienPhaiTra);

function tinhTienDien(a) {
  let dienToiDaHeso1 = 50 * 1806;
  let dienToiDaHeso2 = 50 * 1866;
  let dienToiDaHeso3 = 100 * 2167;
  let dienToiDaHeso4 = 100 * 2729;
  let dienToiDaHeso5 = 100 * 3050;
  if (a >= 401) {
    return (
      dienToiDaHeso1 +
      dienToiDaHeso2 +
      dienToiDaHeso3 +
      dienToiDaHeso4 +
      dienToiDaHeso5 +
      (a - 400) * 3151
    );
  } else if (a >= 301 && a <= 400) {
    return (
      dienToiDaHeso1 +
      dienToiDaHeso2 +
      dienToiDaHeso3 +
      dienToiDaHeso4 +
      (a - 300) * 3050
    );
  } else if (a >= 201 && a <= 300) {
    return dienToiDaHeso1 + dienToiDaHeso2 + dienToiDaHeso3 + (a - 200) * 2729;
  } else if (a >= 101 && a <= 200) {
    return dienToiDaHeso1 + dienToiDaHeso2 + 2167 * (a - 100);
  } else if (a >= 51 && a <= 100) {
    return dienToiDaHeso1 + 1866 * (a - 50);
  } else {
    return 1806 * a;
  }
}
