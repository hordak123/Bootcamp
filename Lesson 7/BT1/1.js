let VL = prompt('Nhập điểm Vật lý');
let HH = prompt('Nhập điểm Hóa học');
let SH = prompt('Nhập điểm Sinh học');
let TB = (parseInt(VL) + parseInt(HH) + parseInt(SH))/3;
let T = parseInt(HH) + parseInt(SH) + parseInt(SH);
document.write('Điểm trung bình 3 môn: ' + TB.toFixed(2));
document.write('<br>');
document.write('Tổng điểm 3 môn: ' + T)