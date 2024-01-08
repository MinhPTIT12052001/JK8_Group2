let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("button");

function normalizeStr(){
    let str = input.value;
    let arr = str.split(' ');
    let words = [];
    for(i = 0; i < arr.length; i++){
        let s = arr[i];
        let newS = normalizeChar(s);
        words.push(newS);
    }

    let result = words.join(' ');
    output.value = result;
}

function normalizeChar(str){
    let lowerCaseStr = str.toLowerCase();
    let firstChar = lowerCaseStr.slice(0, 1);
    let upperChar = firstChar.toUpperCase();
    let result = lowerCaseStr.replace(firstChar, upperChar);
    return result;
}

button.addEventListener('click', normalizeStr);


