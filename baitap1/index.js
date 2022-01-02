var A="A";
var B="B";
var C="C";
var X="X";
var dt1="dt1"
var dt2="dt2"
var dt3="dt3"
var dt0="dt0"
var toanTxtEl = document.getElementById("toanTxt")
var lyTxtEl=document.getElementById("lyTxt")
var hoaTxtEl=document.getElementById("hoaTxt")
var tinhDiemEl=document.getElementById("tinhDiem")
var diemTxtEl=document.getElementById("diemTxt")

function getKhuVuc(khuVuc){
    if(khuVuc == A){
        return 2
    }
    if(khuVuc == B){
        return 1
    }
    if(khuVuc == C){
        return 0.5
    }
    if(khuVuc == X){
        return 0
    }
}
function getDoiTuong(doiTuong){   
    if(doiTuong== dt1){
        return 2.5
    }
    if(doiTuong== dt2){
        return 1.5
    }
    if(doiTuong== dt3){
        return 1
    }
    if(doiTuong== dt0){
        return 0
    }
}
tinhDiemEl.addEventListener('click',function(){
    var khuVucEl=document.querySelector('input[name="rate"]:checked').value;
    var doiTuongEl=document.querySelector('input[name="selector"]:checked').value;

    var toanTxtEl = document.getElementById("toanTxt").value*1
    var lyTxtEl=document.getElementById("lyTxt").value*1
    var hoaTxtEl=document.getElementById("hoaTxt").value*1

var khuVucValue=getKhuVuc(khuVucEl)

var doiTuongValue=getDoiTuong(doiTuongEl)

var tongDiem= toanTxtEl+lyTxtEl+hoaTxtEl+khuVucValue+doiTuongValue

if(tongDiem>=18){
    diemTxtEl.innerHTML="Bạn đạt được số điểm " + tongDiem + " Chúc mừng bạn đã đậu"
}
else{
    diemTxtEl.innerHTML="Bạn đạt được số điểm " + tongDiem + " Chúc bạn may mắn lần sau"
}

})


