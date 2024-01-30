class Rectangle {
  length: number;
  witdth: number;

  constructor(d: number, r: number) {
    this.length = d;
    this.witdth = r;
  }

  findArea(): number {
    let area = this.length * this.witdth;
    return area;
  }
}

let HCN1: Rectangle = new Rectangle(2, 4);
console.log(HCN1.findArea());
