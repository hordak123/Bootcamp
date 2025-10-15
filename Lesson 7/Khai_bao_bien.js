// Bài 1
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';
document.write('i= ' + i);
document.write('<br/>');
document.write('f= ' + f);
document.write('<br/>');
document.write('b= ' + b);
document.write('<br/>');
document.write('s= ' + s);

// Bài 2
let width = 20;
let height = 10;
let area = width * height;
document.write('Area= ' + area);

// Bài 3
let a = prompt('Hãy nhập số a');
let b = prompt('Hãy nhập số b');
let c = parseInt(a) % parseInt(b);
if (c === 0)
    alert('a là bội số của b');
else
    alert('a không phải là bội số của b')