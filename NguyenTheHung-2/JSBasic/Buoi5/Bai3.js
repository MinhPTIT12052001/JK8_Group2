let a = "nGuyeN tHe HUnG"

a = a.toLowerCase()

arr = a.split(" ")

var string_format = "";
var o;

for(let i=0; i<arr.length; i++) {
    let t = arr[i].charAt(0).toUpperCase()
    let temp = arr[i].substring(1,arr[i].length)
    arr[i] = t.concat(temp)
    string_format = string_format.concat(arr[i], " ")
}

console.log(string_format)