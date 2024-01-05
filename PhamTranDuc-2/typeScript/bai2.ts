// Định nghĩa interface Person
interface Person {
  name: string;
  age: number;
  email: string;
}

// Hàm nhận vào đối tượng thuộc interface Person và in ra thông tin
function inThongTinNguoi(person: Person): void {
  console.log('Tên :' + person.name);
  console.log('Tuổi :' + person.age);
  console.log('Email:' + person.email);
}

// Ví dụ sử dụng hàm
const nguoi: Person = {
  name: 'PhamTranDuc',
  age: 23,
  email: 'phamTranDuc@gmail.com',
};

inThongTinNguoi(nguoi);
