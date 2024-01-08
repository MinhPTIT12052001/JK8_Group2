const enum Color {
    red = "Red",
    green = "Green",
    blue = "Blue",
    orange = "Orange"
}

const quaCam = Color.orange;

function getInRaMauPhanTu(arg:Color):void{
    console.log(arg);
}

getInRaMauPhanTu(Color.red);