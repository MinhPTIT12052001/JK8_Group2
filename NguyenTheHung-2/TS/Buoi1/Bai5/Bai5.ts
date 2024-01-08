class Rectangle {
    private dai: number;
    private rong: number;
  
    public constructor(dai: number, rong: number) {
      this.dai = dai;
      this.rong = rong;
    }
  
    public getDientich(): number {
      return this.dai*this.rong;
    }
  }
        
  const rectangle = new Rectangle(2, 3);
  
  console.log(rectangle.getDientich());