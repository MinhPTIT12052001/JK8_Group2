interface Person{
    name: string;
    age: number;
    email: string;
}

function getInfor(person : Person){
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Email: " + person.email);
}

let ps:Person = {name: "Nguyễn Văn A", age: 21, email: "nguyen@gmail.com"};
getInfor(ps);