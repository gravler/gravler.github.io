const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')
const body = document.querySelector('body')
const headerTop = document.querySelector('.header__top')
const headerLinks = document.querySelectorAll('.header__nav-link')
const headerMain = document.querySelector('.header__main')

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})
headerLinks.forEach(link => {
    link.addEventListener('click', function() {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
    })
})

window.onscroll = function () {
    if(window.pageYOffset > 80) {
        headerTop.classList.add('header__fixed')
        headerMain.style.marginTop = '115px'
    } else {
        headerTop.classList.remove('header__fixed')
        headerMain.style.marginTop = 0
    }
}