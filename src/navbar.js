import './navbar.css';
export function initNavbar(){
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
    <div class="navbar-logo"></div>
    <div class="navbar-burger-menu"></div>
    `

    // on click scroll to the top
    const navbarLogo = document.querySelector('.navbar-logo')
    navbarLogo.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}