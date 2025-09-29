import './navbar.css';
export function initNavbar(){
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `<div class="navbar-logo"></div>`

    // on click scroll to the top
    const navbarLogo = document.querySelector('.navbar-logo')
    navbarLogo.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}