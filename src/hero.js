import './hero.css';
export function initHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
    <div class="hero-img"></div>
    <div class="hero-welcome-img"></div>
    `
}
