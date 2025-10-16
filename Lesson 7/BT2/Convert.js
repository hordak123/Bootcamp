function Convert() {
let a = parseInt(document.getElementById("amount").value);
let c1 = document.getElementById("cur1").value;
let c2 = document.getElementById("cur2").value;
var r;
if (c1 == "USD") {
    if (c2 == "USD") {
        r = a;
    } else if (c2 == "VND") {
        r = a * 27000;
    }
}
else if (c1 == "VND") {
    if (c2 == "VND") {
        r = a;
    } else if (c2 == "USD") {
        r = a / 27000;
    }
}
document.getElementById("result").innerHTML = 'Result: ' + r.toLocaleString('vi-VN') + ' ' + c2;}