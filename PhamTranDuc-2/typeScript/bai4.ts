enum Color {
  RED = 'màu đỏ',
  GREEN = 'xanh lá',
  BLUE = 'xanh dương',
}

function printColor(color: Color): void {
  console.log(color);
}

const selectedColor = Color.BLUE;
printColor(selectedColor);
