// bài 1
document.getElementById("btnthanhTien").onclick = function() {
    var  day = document.getElementById("txtsongaylam").value;
    if(day == ""){
        document.getElementById("footerDangNhap").innerHTML =" nhap sai du lieu, vui long nhap lai!";
    }
    else{
    var ketqua = 100000 * day;
    console.log(ketqua);
    document.getElementById("footerDangNhap").innerHTML = ketqua;}
}

// bài 2
document.getElementById("tinhTong").onclick = function(){
    var num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);
    var num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);
    var num3 = document.getElementById("num3").value;
    num3 = parseFloat(num3);
    var num4 =  document.getElementById("num4").value;
    num4 = parseFloat(num4);
    var num5 = document.getElementById("num5").value;
    num5 = parseFloat(num5);
    var tong = num1 +num2+ num3 + num4 + num5;
    var tongSo = "Tổng 5 số thực là: " +tong
    document.getElementById("tong5so").innerHTML = tongSo;
}

// bài 3
document.getElementById("quyDoi").onclick = function(){
    var dollar = document.getElementById("dollar").value;
    dollar = parseFloat(dollar);
    var tienViet = dollar * 23000;
    var thanhTien = "Số tiền Việt được đổi là: " + tienViet;
    document.getElementById("tienViet").innerHTML = thanhTien;
}

// bài 4
document.getElementById("cVdT").onclick = function(){
    var cd = document.getElementById("chieuDai").value;
    cd = parseFloat(cd);
    var cr = document.getElementById("chieuRong").value;
    cr = parseFloat(cr);
    var cv = (cd + cr) * 2;
    var dt = cd * cr;
    var kqcv = "Chu vi của hình chữ nhật là: " + cv;
    var kqdt = "Diện tích hình chữ nhật là: " + dt;
    document.getElementById("ketQua1").innerHTML = kqcv;
    document.getElementById("ketQua2").innerHTML =kqdt;
}

//bai 5
document.getElementById("tong2kySo").onclick = function(){
    var num = document.getElementById("numTong").value;
    num = parseInt(num);
    var ky1 = Math.floor(num/10);
    var ky2 = num % 10;
    var kq = ky1 + ky2;
    var tong2ky = "Tổng 2 ký số là: " + kq;
    document.getElementById("KQ").innerHTML = tong2ky; 
}