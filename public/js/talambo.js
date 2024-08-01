function redondear(num, decimales = 3) {
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(num);
    // round(x * 10 ^ decimales)
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
    // x * 10 ^ (-decimales)
    num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
}

$("#btnCanalTalambo").click(function(){
    var miratalambo = document.getElementById("miracompuertaTalambo").value;
    if (miratalambo == "" ) {
        alert("Debe ingresar el valor de MIRA Canal Talambo Zaña");
    }else{
        var caudalTalambo = 6.7872 * Math.pow(miratalambo, 1.6194);
        document.getElementById("caudalcompuertaTalambo").value = redondear(caudalTalambo);
    }
});

$("#btnEmpalmeguadalupe").click(function(){
    var miraGuadalupe = document.getElementById("miracompuertaGuadalupe").value;
    if (miraGuadalupe == "" ) {
        alert("Debe ingresar el valor de MIRA Canal Guadalupe");
    }else{
        var caudalGuadalupe = 5.5568 * Math.pow(miraGuadalupe, 1.9073);
        document.getElementById("caudalcompuertaGuadalupe").value = redondear(caudalGuadalupe);
    }
});

$("#btnCaudalTotalTalambo").click(function(){

    let caudalTalamboT   = document.getElementById("caudalcompuertaTalambo").value;
    let caudalGuadalupeT = document.getElementById("caudalcompuertaGuadalupe").value;
    let caudalTalambozanaG12   = document.getElementById("caudalTalambozanaG1").value;

    if (caudalTalamboT == "" ) {
        alert("Caudal Talambo Zaña Vacio");
        if (caudalGuadalupeT == "" ) {
            alert("Caudal Guadalupe Vacio");
        }else{
                var totalTalambos3 = parseFloat(caudalTalamboT)+parseFloat(caudalGuadalupeT)+parseFloat(caudalTalambozanaG12);
                alert(totalTalambos3);
                document.getElementById("salidaTalambo").value = redondear(totalTalambos3);
        }
    }
});
