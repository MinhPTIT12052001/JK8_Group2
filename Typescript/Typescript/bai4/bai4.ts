enum Color {
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue"
  }
  
  function printColorName(color: Color): void {
    console.log(`Color name: ${color}`);
  }
let color = Color.RED;
printColorName(color); 

printColorName(Color.GREEN);