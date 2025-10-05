import './hero.css';
export function initHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
    <div class="hero-img"></div>
    <iframe class="spline" src="https://my.spline.design/untitled-4PAG7B6is0PXcLJmRrjxaJDc-mc7/" frameborder="0" width="100%" height="100%"></iframe>
    <div class="hero-welcome-img"></div>
    `
}
