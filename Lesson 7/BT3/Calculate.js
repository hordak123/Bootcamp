function Calculate(x) {
    var x; //Toán tử
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let r; //Kết quả
    if (x == 1) {
        r = a + b;
    }
    else if (x == 2) {
        r = a - b;
    }
    else if (x == 3) {
        r = a * b;
    }
    else if (x == 4) {
        r = a / b;
    }
    document.getElementById("result").innerHTML = 'Result: ' + r.toFixed(2)
}