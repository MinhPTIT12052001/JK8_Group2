let input = prompt("Nhập tên của bạn: ");

function chuanHoaTen(a) {
  let ten = a.toLowerCase().trim();
  ten = ten.replace(/\s+/g, " ");
  let array = ten.split(" ");
  let rs = "";
  for (i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    rs = rs + array[i] + " ";
  }
  return rs;
}
let kq = chuanHoaTen(input);
alert(kq);
console.log(kq);
