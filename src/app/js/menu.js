
// Variables globales para el menu 
const menuHam = document.querySelector("#menu-ham"),
    menu = document.querySelector("#menu"),
    header = document.querySelector("#header"),
    logo = document.querySelector('#logo'),
    bars = Array.prototype.slice.apply(document.querySelectorAll(".bar"))

const assets = (nameImg, colorBar, actionClass) => {

    `${actionClass}` === 'add'
        ? header.classList.add('header')
        : header.classList.remove('header')

    logo.src = `./assets/img/${nameImg}`
    for (let bar in bars) {
        bars[bar].style.backgroundColor = `${colorBar}`
    }
}

//  el menu de mobile desplegable
const menuMobile = () => {
    if (menuHam.classList.toggle('close-mobile')) {
        menu.style.height = " 100vh"
        assets('logo-fullcolor.svg', '#481AE7', 'add')

    } else {
        menu.style.height = '0'

        if (window.scrollY <= 100) {
            assets('logo-white.svg', '#fff', 'remove')
        }
    }
}
menuHam.addEventListener('click', menuMobile)


//  Header change color 
window.addEventListener('scroll', () => {
    changeHeader()
})

const changeHeader = () => {
    let scrollY = window.scrollY

    scrollY >= 100
        ? assets('logo-fullcolor.svg', '#481AE7', 'add')
        : assets('logo-white.svg', '#fff', 'remove')
}
header.addEventListener('scroll', changeHeader)