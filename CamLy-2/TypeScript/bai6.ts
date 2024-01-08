class Person{
    name: string;
    age: number;
    email: string;
    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    @logInfor()
    getInfor(){};
    getInfor2(){};
}

function logInfor(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("Call method");
    }
}

let ps1 = new Person("abc", 21, "hgg");
ps1.getInfor2();