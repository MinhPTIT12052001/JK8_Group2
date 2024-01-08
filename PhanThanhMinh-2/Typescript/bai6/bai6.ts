import { logMethod } from "./logMethod";
class MyClass {
    @logMethod
    myMethod() {
      console.log("Hello from myMethod");
    }
  }
  
  const instance = new MyClass();
  instance.myMethod();