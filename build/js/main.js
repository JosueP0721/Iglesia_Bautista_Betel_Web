const menuHamburger = document.querySelector(".navegacion__boton")
const navLinks = document.querySelector(".header__navegacion")

menuHamburger.addEventListener('click',()  =>{ 
    if(navLinks.classList.contains('header__navegacion__none-display')) {
        navLinks.classList.remove('header__navegacion__none-display');
    } else {
        navLinks.classList.add('none');
        setTimeout(() => {
            navLinks.classList.add('header__navegacion__none-display');
            navLinks.classList.remove('none');
          }, 800);
    }
})