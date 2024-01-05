function printInfo(person) {
    return "".concat(person.name, ", ").concat(person.age, ", ").concat(person.email);
}
var john = {
    name: 'John',
    age: 22,
    email: 'john@gmail.com'
};
console.log(printInfo(john));
