class Rectangle {
    length: number;
    width: number;
  
    constructor(length: number, width: number) {
      this.length = length;
      this.width = width;
    }
  
    calculateArea(): number {
      return this.length * this.width;
    }
  }
const rectangle = new Rectangle(4, 5);
const area = rectangle.calculateArea();
console.log(area); 