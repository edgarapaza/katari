
// navbar menu de 3 lineas

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".header__nav");
let lista = document.querySelector(".header__nav .menu");
menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    lista.classList.toggle("vertical");
    lista.classList.remove("dropdown");
    lista.removeAttribute("data-dropdown-menu")

}

//el scroll blanco
window.onscroll = () =>{

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
}

