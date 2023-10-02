
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

$("#btnCalcular1").click(function(){

	var voltotal = document.getElementById("volumenTotal").value;
	if (voltotal == "" ) {
		alert("Debe ingresar el VOLUMEN TOTAL");
	}else{
		var volUtil = voltotal - 68.012;
		document.getElementById("volumenUtil").value = redondear(volUtil)
	}
});

$("#btnPaltas").click(function(){
	var mirapaltas = document.getElementById("ingresoMiraPalta").value;
	if (mirapaltas == "" ) {
		alert("Debe ingresar el valor de MIRA Paltas");
	}else{
		var caudal1 = 7.7492 * Math.pow(mirapaltas, 4.2176);

		document.getElementById("ingresoCaudalPaltas").value = redondear(caudal1);
	}
});

$("#btnIngresoYonan").click(function(){
	var mirayonan = document.getElementById("ingresoMiraYonan").value;
	if (mirayonan == "" ) {
		alert("Debe ingresar el valor de MIRA Yonan");
	}else{
		var caudalYonan = 6.3827 * Math.pow(mirayonan, 3.9078);
		document.getElementById("ingresoCaudalYonan").value = redondear(caudalYonan);
	}
});

$("#btnEstacion2").click(function(){
	var mirae2 = document.getElementById("salidaMiraE2").value;
	if (mirae2 == "" ) {
		alert("Debe ingresar el valor de MIRA en la Salida 2");
	}else{
		var caudalEstacion2 = 43.7187 * Math.pow(mirae2, 1.941);

		document.getElementById("salidaCaudalE2").value = redondear(caudalEstacion2);
	}
});

$("#btnMiniCentral").click(function(){
	var miraMini = document.getElementById("salidaMiraMinicentral").value;
	if (miraMini == "" ) {
		alert("Debe ingresar el valor de MIRA de Mini Central");
	}else{
		var caudal1 = 4.6578 * Math.pow(miraMini, 2.2578);
		document.getElementById("salidaCaudalMinicentral").value = redondear(caudal1);
	}
});

$("#btncanalgc").click(function(){
	var miracanalgc = document.getElementById("salidaMiraCGC").value;
	if (miracanalgc == "" ) {
		alert("Debe ingresar el valor de MIRA de Canal Gallito Ciego");
	}else{
		var caudal1 = 1.7296 * Math.pow(miracanalgc, 1.4691);
		document.getElementById("salidaCaudalCGC").value = redondear(caudal1);
	}
});

$("#btnCaudaltotal-e").click(function(){
	var caudalE2 = document.getElementById("salidaCaudalE2").value;
	/*var caudal2 = document.getElementById("salidaCaudalMinicentral").value;*/
	var caudalCGC = document.getElementById("salidaCaudalCGC").value;
	var caudalCT = document.getElementById("salidaCaudalCTorta").value;


	var caudaltotal = (parseFloat(caudalE2)+parseFloat(caudalCGC)+parseFloat(caudalCT));
	console.log(caudaltotal);
	document.getElementById("caudalTotal-e").value = redondear(caudaltotal);

});
