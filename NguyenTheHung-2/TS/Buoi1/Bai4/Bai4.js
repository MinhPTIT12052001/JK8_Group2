var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
function getColorName(color) {
    switch (color) {
        case Color.RED:
            console.log("RED");
            break;
        case Color.GREEN:
            console.log("GREEN");
            break;
        case Color.BLUE:
            console.log("BLUE");
            break;
        default:
            return "UNKNOWN";
    }
}
getColorName(Color.RED);
