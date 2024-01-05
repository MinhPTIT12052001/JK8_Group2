enum Color {
    RED,
    GREEN,
    BLUE
}

function getColorName(color: Color) {
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

getColorName(Color.RED)