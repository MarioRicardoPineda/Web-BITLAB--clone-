
// Variables globales para el menu 
const menuHam = document.querySelector("#menu-ham"),
    menu = document.querySelector("#menu"),
    header = document.querySelector("#header"),
    logo = document.querySelector('#logo'),
    bars = Array.prototype.slice.apply(document.querySelectorAll(".bar")),
    links = Array.prototype.slice.apply(document.querySelectorAll(".menu__link"))


const assets = (nameImg, colorBar, actionClass, colorLink) => {

    `${actionClass}` === 'add'
        ? header.classList.add('header')
        : header.classList.remove('header')

    logo.src = require(`../assets/img/${nameImg}`)

    for (let bar in bars) {
        bars[bar].style.backgroundColor = `${colorBar}`
    }

    if(window.innerWidth >= 1024){
        for (let link in links) {
            links[link].style.color = `${colorLink}`
        }
    }
}

//  el menu de mobile desplegable
const menuMobile = () => {
    if (menuHam.classList.toggle('close-mobile')) {
        menu.style.height = " 100vh"
        assets('logo-fullcolor.svg', '#481AE7', 'add')

    } else {
        menu.style.height = '0'

        if (window.scrollY <= 150) {
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

    scrollY >= 150
        ? assets('logo-fullcolor.svg', '#481AE7', 'add', "#212121")
        : assets('logo-white.svg', '#fff', 'remove', "#ffffff")

}
header.addEventListener('scroll', changeHeader)