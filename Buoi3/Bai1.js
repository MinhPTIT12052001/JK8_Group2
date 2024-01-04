function sum() {
    var a = document.getElementById("input_numa")
    var b = document.getElementById("input_numb")

    valueA = a.value
    valueB = b.value

    var numA = new Number(valueA)
    var numB = new Number(valueB)

    console.log(numA + numB)
}