export function logMethod(target: any, key: string, descriptor: PropertyDescriptor): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]): any {
    console.log(`Method ${key} is called with arguments:`, args);

    // Gọi phương thức gốc
    const result = originalMethod.apply(this, args);

    console.log(`Method ${key} returned:`, result);

    return result;
  };
}