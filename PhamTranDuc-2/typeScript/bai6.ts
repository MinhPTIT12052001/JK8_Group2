function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const oldMethodSayInfor = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log('Success ex !!!');
    return oldMethodSayInfor.apply(this, args);
  };
}

class Student {
  id: number;
  name: string;

  constructor(soTT: number, ten: string) {
    this.id = soTT;
    this.name = ten;
  }
  @Logger
  pointForEx(poin: number, ex: string): string {
    return poin + ' for ' + ex;
  }
}

let Ptd: Student = new Student(1, 'PhamTranDuc');
let point: string = Ptd.pointForEx(10, 'Physicl');
console.log(point);
