class Rectangle {
    private height: number;
    private width: number;

    constructor(height: number, width : number){
        this.height = height;
        this.width = width;
    }

    public dienTichHinhChuNhat(height: number, width : number): number{
        let dientich : number = height * width;
        return dientich;
    }

    public tTichHinhChuNhat(): number{
        return this.height * this.width;
    }
}


let rec1 : Rectangle = new Rectangle(3,5);

console.log(rec1.tTichHinhChuNhat());