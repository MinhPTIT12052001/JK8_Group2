interface Person{
    name: string;
    age: number;
    email: string;
}
function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Email: ${person.email}`);
  }
  const person: Person = {
    name: "Phan Thanh Minh",
    age: 22,
    email: "thanhminh12052001@gmail.com"
  };
  
  printPersonInfo(person);