// Bài 1
class Person {
  constructor(name, age, gender) {
    let _name;
    let _age;
    let _gender;
    _name = name;
    _age = age;
    _gender = gender;
    this.setName = function (name) {
      _name = name;
    };
    this.setAge = function (age) {
      _age = age;
    };
    this.setGender = function (gender) {
      _gender = gender;
    };
    this.getName = function () {
      return _name;
    };
    this.getAge = function () {
      return _age;
    };
    this.getGender = function () {
      return _gender;
    };
  }
}

let duc = new Person("PhamTranDuc", 23, "Male");
console.log(duc);
console.log(duc.getName());
console.log(duc.getAge());
console.log(duc.getGender());

// Bài 2

class Men extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }
}
Men.prototype.sayInfor = function () {
  console.log("Im Men");
};
let men = new Men("PTD", 30, "male");
men.sayInfor();
