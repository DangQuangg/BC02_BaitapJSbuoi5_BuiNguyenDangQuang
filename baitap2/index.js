var kwEl=document.getElementById("kwTxt")
var tinhTienEl=document.getElementById("tinhTien")
var tienEl=document.getElementById("tienTxt")

function getKw50(kW){
    
    if(kW <= 50 || kW >50 || kW <=100 || kW >100 || kW <=200 || W >200 || kW <=350  ){
        return 500
    }
}
    function getKw50Ke(kW){
        if(kW <= 50 || kW >50 || kW <=100 ){        
        return 650
    }
}
    function getKw100(kW){
        if(kW <= 50 || kW >50 || kW <=100 || kW >100 || kW <=200 ){
     return 850
    }
}
    function getKw150(kW){
        if(kW <= 50 || kW >50 || kW <=100 || kW >100 || kW <=200 || W >200 || kW <=350  ){
            return 1100
    }
}
    function getKw350(kW){
        if(kW <= 50 || kW >50 || kW <=100 || kW >100 || kW <=200 || W >200 || kW <=350 ||kW>350 ){                    return 1300
    }
}
tinhTienEl.addEventListener('click',function(){
    var kwValue=kwEl.value*1
    var tienPhaiTra
    var tongGia50kwDau=50*500
    var tongGia50kwKe=50*650
    var tongGia100kwKe=100*850
    var tongGia150kwKe=150*1100

    var giaCuoc=getKw50(kwValue)
    var giaCuoc50Ke=getKw50Ke(kwValue)
    var giaCuoc100Ke=getKw100(kwValue)
    var giaCuoc150Ke=getKw150(kwValue)
    var giaCuoc350=getKw350(kwValue)
    if (kwValue<=50){
        
        tienPhaiTra=kwValue*giaCuoc
    }
     if (kwValue > 50 && kwValue <=100){

        tienPhaiTra=(kwValue-50) *giaCuoc50Ke + tongGia50kwDau
    }
     if (kwValue >100 && kwValue <=200){
        tienPhaiTra=(kwValue-100) *giaCuoc100Ke + (tongGia50kwDau+ tongGia50kwKe)
    }
     if (kwValue >200 && kwValue <=350){
        tienPhaiTra=(kwValue-200) *giaCuoc150Ke + (tongGia50kwDau+ tongGia50kwKe+tongGia100kwKe)
    }
     if (kwValue >350){
        tienPhaiTra=(kwValue-350) *giaCuoc350 + (tongGia50kwDau+ tongGia50kwKe+tongGia100kwKe+tongGia150kwKe)
    }

    tienEl.innerHTML="Số tiền phải trả: " + tienPhaiTra + "VnĐ"


})
