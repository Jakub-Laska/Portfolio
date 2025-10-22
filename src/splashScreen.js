import "./splashScreen.css";

export function initSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    const mainContainer = document.querySelector("#mainContainer");
    const header = document.querySelector("#header");  
    splashScreen.innerHTML = '<span class="splash-span">jakub</span><span class="splash-span">laska.</span>';
    const spans = document.querySelectorAll(".splash-span");

    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("active");
        }, (index + 1) * 300);
    });

    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove("active");
                span.classList.add("fade");
            }, (index + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
        splashScreen.style.top = "-100vh";
    }, 2300);

    setTimeout(() => {
        document.body.style.overflow = "auto";
        mainContainer.style.opacity = "1";
        header.style.opacity = "1";
    }, 3300);
}
