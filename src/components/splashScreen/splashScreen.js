import "./splashScreen.css";

export function initSplashScreen() {
    window.history.scrollRestoration = "manual";
    // document.body.style.overflow = "hidden";
    const splashScreen = document.getElementById("splash-screen");
    const welcomePage = document.getElementById('welcomePage');
    const mainContainer = document.querySelector("#mainContainer");
    const header = document.querySelector("#header");
    splashScreen.innerHTML = `<p class="logo">jakub laska<span>.</span></p>`;
    const logo = document.querySelector(".logo");

    setTimeout(() => {
        logo.classList.add("active");
    }, 80);

    setTimeout(() => {
        logo.classList.remove("active");
        logo.classList.add("fade");
    }, 2600);

    setTimeout(() => {
        splashScreen.style.top = "-100vh";
    }, 3000);

    setTimeout(() => {
        mainContainer.style.opacity = "1";
        welcomePage.style.transition = "2s ease-in-out";
        welcomePage.style.opacity = "1";
    }, 3100);

    setTimeout(() => {
        header.style.top = "0px";
    }, 8000);
}
// Timing breakdown:
// 30
// 300
// 2000
// 2300
// 3300
// 8000