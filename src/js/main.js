const menuHamburger = document.querySelector(".navegacion__boton")
const navLinks = document.querySelector(".header__navegacion")

menuHamburger.addEventListener('click',()  =>{ 
    if(navLinks.classList.contains('none-display')) {
        navLinks.classList.remove('none-display');
    } else {
        navLinks.classList.add('none');
        setTimeout(() => {
            navLinks.classList.add('none-display');
            navLinks.classList.remove('none');
          }, 800);
    }
})