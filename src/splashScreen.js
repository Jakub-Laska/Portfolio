import "./splashScreen.css";

export function initSplashScreen() {
    window.history.scrollRestoration = "manual";
    document.body.style.overflow = "hidden";
    const splashScreen = document.getElementById("splash-screen");
    const welcomePage = document.getElementById('welcomePage');
    const mainContainer = document.querySelector("#mainContainer");
    const header = document.querySelector("#header");
    splashScreen.innerHTML = '<span class="splash-span">jakub</span><span class="splash-span">laska.</span>';
    const spans = document.querySelectorAll(".splash-span");

    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("active");
        }, (index + 1) * 30);
    });

    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove("active");
                span.classList.add("fade");
            }, (index + 1) * 300);
        });
    }, 2000);

    setTimeout(() => {
        splashScreen.style.top = "-100vh";
    }, 2300);

    setTimeout(() => {
        mainContainer.style.opacity = "1";
        welcomePage.style.transition = "2s ease-in-out";
        welcomePage.style.opacity = "1";
    }, 3300);
    setTimeout(() => {

        header.style.opacity = "1";
    }, 8000);
}
// Timing breakdown:
// 30
// 300
// 2000
// 2300
// 3300
// 8000