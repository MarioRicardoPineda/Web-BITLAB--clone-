
// Variables globales 
const menuHam = document.querySelector("#menu-ham"),
    menu = document.querySelector("#menu"),
    header = document.querySelector("#header"),
    logo = document.querySelector('#logo')


//  el menu de mobile desplegable


const menuMobile = () => {
    if (menuHam.classList.toggle('close-mobile')) {
        menu.style.height = " 100vh"
        header.classList.add('header')
        logo.src = "./assets/img/logo-fullcolor.svg"
        menuHam.classList.add('bar-color')
    } else {
        menu.style.height = '0'
        header.classList.remove('header')
        logo.src = "./assets/img/logo-white.svg"
    }
}
menuHam.addEventListener('click', menuMobile)

//  Header change color 

window.addEventListener('scroll', () => {
    changeHeader()
})

const changeHeader = () => {

    let scrollY = window.scrollY
    // console.log(scrollY);
    if (scrollY >= 300) {
        header.classList.add('header')
        logo.src = "./assets/img/logo-fullcolor.svg"
        menuHam.style.backgroundColor = "#481AE7"
    } else {
        header.classList.remove('header')
        logo.src = "./assets/img/logo-white.svg"
        menuHam.style.backgroundColor = "#ffffff"
    }


}

header.addEventListener('scroll', changeHeader)