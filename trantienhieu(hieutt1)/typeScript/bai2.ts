interface Person{
    name : string;
    age : number;
    email : string;
}

function xuatInfoPerson(person : Person) : void{
    console.log(`ten : ${person.name}`);
    console.log(`age : ${person.age}`);
    console.log(`email : ${person.email}`);
}

const person1 : Person = {
    name : "hieu",
    age: 21,
    email: "hieu@gmail.com"
}

xuatInfoPerson(person1);