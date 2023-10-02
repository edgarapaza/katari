console.log("reloj");

const time = document.getElementById('time');
const date = document.getElementById('date');

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const interval = setInterval(()=>{
	const local = new Date();
	let dia = local.getDate(),
	    mes = local.getMonth(),
	    anio = local.getFullYear();

	time.innerHTML = local.toLocaleTimeString();
	date.innerHTML = `${dia} ${mese[mes]} ${anio}`;

}, 1000)