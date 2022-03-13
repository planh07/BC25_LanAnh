document.getElementById("btnthanhTien").onclick = function() {
    var  day = document.getElementById("txtsongaylam").value;
    if(day == ""){
        document.getElementById("footerDangNhap").innerHTML =" nhap sai du lieu, vui long nhap lai!";
    }
    else{
    var ketqua = 100000 * day;
    console.log(ketqua);
    document.getElementById("footerDangNhap").innerHTML = ketqua;}
};

document.getElementById("btngiatritb").onclick = function (){
    var so1 = document.getElementById("txtsothuc1").value;
    var so2 = document.getElementById("txtsothuc2").value;
    var so3 = document.getElementById("txtsothuc3").value;
    var so4 = document.getElementById("txtsothuc4").value;
    var so5 = document.getElementById("txtsothuc5").value;
    var ketqua = (so1 + so2 + so3 + so4 + so5) /5;
    console.log(ketqua);
    document.getElementById("footerDangNhap").innerHTML = ketqua;
}