import './hero.css';
export function initHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
    <div class="hero-img"></div>
    <iframe class="spline" src='https://my.spline.design/starterscenecopy-D7MhSKbm89m4p74WE9BeGdDU/' frameborder='0'></iframe>
    <div class="hero-welcome-img"></div>
    `
}