const navToggle = document.querySelector(".nav-toggle")
const navMenu   = document.querySelector(".nav-menu")

navToggle.addEventListener("click", ()=>{
	navMenu.classList.toggle("nav-menu_visible");

	if(navMenu.classList.contains("nav-menu_visible")){
		navToggle.setAttribute("area-label", "Cerrar menú");
	}else{
		navToggle.setAttribute("area-label", "Abrir menú");
	}

	document.querySelector('.nav-menu').addEventListener('click', function () {
        toggleNavbar();
    });
})