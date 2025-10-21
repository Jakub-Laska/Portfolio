import './splashScreen.css';

export function initSplashScreen(){
    splashAnimation();

}
    const spans = document.querySelectorAll('.splash-span');
    const splashScreen = document.getElementById('splash-screen');

function splashAnimation(){
    window.addEventListener('DOMContentLoaded', () => {

        spans.forEach((span, index) => {
            setTimeout(() => {
            span.classList.add('active');
            }, (index + 1) * 300);
        });

    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
            }, (index + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
        splashScreen.style.top = '-100vh';
    }, 2300);

    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 3800);
});
}
