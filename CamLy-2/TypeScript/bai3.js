//Bài 3: Viết một hàm generic nhận vào một mảng 
//và trả về phần tử đầu tiên của mảng đó.
function firstElement(arr) {
    return arr[0];
}
var arrayNumber = [1, 0, 9, 6];
console.log(firstElement(arrayNumber));
var arrayString = ["b", "h", "c"];
console.log(firstElement(arrayString));
