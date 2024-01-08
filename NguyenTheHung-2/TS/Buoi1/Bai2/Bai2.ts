interface IPerson {
    name: string,
    age: number,
    email: string
}

function printInfo(person: IPerson) {
    return `${person.name}, ${person.age}, ${person.email}`;
}

let john = {
    name: 'John',
    age: 22,
    email: 'john@gmail.com'
}

console.log(printInfo(john))