const $botonBurguer = document.querySelector(".iconoMenuBurguer"),
    $menuBurguer = document.querySelector(".nav")

document.addEventListener("click", e => {
    if(e.target.classList.contains("iconoMenuBurguer")) {
        $menuBurguer.classList.toggle("active")
    }
})