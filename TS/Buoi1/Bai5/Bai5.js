var Rectangle = /** @class */ (function () {
    function Rectangle(dai, rong) {
        this.dai = dai;
        this.rong = rong;
    }
    Rectangle.prototype.getDientich = function () {
        return this.dai * this.rong;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(2, 3);
console.log(rectangle.getDientich());
