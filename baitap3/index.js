var thuNhapEl=document.getElementById("thuNhapTxt")
var nguoiEl=document.getElementById("nguoiTxt")
var tinhThueEl=document.getElementById("tinhThue")
var thueEl=document.getElementById("thueTxt")

function getThuNhap(thuNhap){
    if(thuNhap<=60){
       return 5/100
}
    if(thuNhap>60 && thuNhap<=120){
       return 10/100
}
    if(thuNhap>120 && thuNhap<=210){
       return 15/100
}
    if(thuNhap>210 && thuNhap<=384){
       return 20/100
}
    if(thuNhap>384 && thuNhap<=624){
        return 25/100
}
    if(thuNhap>624 && thuNhap<=960){
       return 30/100
}
    if(thuNhap>960){
        return 35/100
}
}

tinhThueEl.addEventListener('click',function(){
    var thuNhapValue=thuNhapEl.value*1
    var nguoiValue=nguoiEl.value*1
    var thueThuNhapCaNhan
    
    if (thuNhapValue<=60) {
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }
    else if (thuNhapValue>60 && thuNhapValue<=120) {
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }
    else if(thuNhapValue>120 && thuNhapValue<=210){
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }
    else if(thuNhapValue>210 && thuNhapValue<=384){
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }
    else if(thuNhapValue>384 && thuNhapValue<=624){
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }
    else if(thuNhapValue>624 && thuNhapValue<=960){
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }
    else if(thuNhapValue>960){
        thueThuNhapCaNhan=(thuNhapValue-4-(nguoiValue*1.6))*(getThuNhap(thuNhapValue))
    }

    console.log({thueThuNhapCaNhan});
    thueEl.innerHTML="Thuế thu nhập cá nhân của bạn là : " +thueThuNhapCaNhan.toFixed(1) + "tr VNĐ";
})