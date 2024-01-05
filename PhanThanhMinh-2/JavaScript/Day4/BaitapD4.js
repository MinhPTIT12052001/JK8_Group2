//Bài 1: hãy khởi tạo một class (tên bất kì) có từ hai thuộc tính trở lên,
// và triển khai sao cho class này tuân thủ tính đóng gói của hướng đối tượng

class Human{
    constructor(name, age){
        let _name;
        let _age;
        _name = name;
        _age = age;

        this.getName = function() {
            return _name;
        };
        this.getAge = function() {
            return _age;
        };
        this.setName = function(name){
            _name = name;
        };
        this.setAge = function(age){
            _age = age;
        }
    }
}
let object = new Human("Phan Thanh Minh", 22);
console.log(object.getName());
console.log(object.getAge());

// Bài 2: Tạo class mới kế thừa class ở bài 1, thêm một method mới cho class con này thông qua prototype object
// Tạo đối tượng bằng class con và gọi thử method mới

class Teacher extends Human{
    constructor(name, age){
        super(name,age)
    }
}

Teacher.prototype.newMethod = function () {
    console.log('Name: ', this.getName())
    console.log('Age: ', this.getAge())
}

let teacher = new Teacher("Pham Thi Phuong", 44);
teacher.newMethod();

// Bài 3: Cho mảng số nguyên let m = [2,3,5,8,9,6,4,1] hãy ánh xạ mảng này thành một mảng có chứa các giá trị 
// biểu diễn số nguyên dương ở dạng chuỗi tức mảng ánh xạ có dạng ['2','3','5',....]

let m = [2,3,5,8,9,6,4,1]
let mA = m.map((e) => e + '');

console.log(mA);