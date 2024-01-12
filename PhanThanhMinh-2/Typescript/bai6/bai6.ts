function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${key} with arguments: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}

class ExampleClass {
  @logMethod
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}

const example = new ExampleClass();
example.greet("Minh");