class Rectangle{
    chieuDai: number;
    chieuRong: number;
    constructor(chieuDai:number , chieuRong:number){
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }
    dienTich(){
        return this.chieuDai * this.chieuRong;
    }
}

let hcn = new Rectangle(5, 3);
let s = hcn.dienTich();
console.log(s);