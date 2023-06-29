const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}
const showSubMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-submenu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-add')
    })
}

showMenu('nav-toggle', 'nav-menu');
showSubMenu('nav-subtoggle', 'nav-submenu');
showSubMenu('nav-subtoggle-1', 'nav-submenu-1')
showSubMenu('nav-subtoggle-2', 'nav-submenu-2')