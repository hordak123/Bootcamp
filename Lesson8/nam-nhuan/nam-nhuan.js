let year = +prompt('Nhập vào năm cần kểm tra')
if (!(year % 4) && (year % 100 !== 0)) {
    document.write(year + ' là năm nhuận');
} else if (!(year % 100) && (year % 400 !== 0)) {
    document.write(year + ' không phải là năm nhuận')
} else if (!(year % 100) && !(year % 400)) {
    document.write(year + ' là năm nhuận')
} else {
    document.write(year + ' không phải là năm nhuận')
}