import "./footer.css";

export function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
    <h1>Let's work togheter.</h1>
    <div class="signature">
        <p>Designed and Developed by Jakub Laska.</p>
        <p>52º 10' 52.793" N 21º 1' 36.192" E.</p>
        <p>Since 2025.</p>
    </div>
    <p class="logo">jakub laska<span>.</span></p>
    <div class="quote">
        <div>
            Something to reflect on.
            <button>random quote.</button>
        </div>
    </div>
    `;
    window.addEventListener('scroll', () => {
        const footer = document.getElementById('footer');
        const scrollY = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const windowH = window.innerHeight;

        if (scrollY >= (pageHeight - (windowH * 1.3))) {
            footer.style.filter = "blur(0px)";
        } else if (scrollY >= (pageHeight - (windowH * 1.4))) {
            footer.style.filter = "blur(4px)";
        } else if (scrollY >= (pageHeight - (windowH * 1.5))) {
            footer.style.filter = "blur(6px)";
        } else if (scrollY >= (pageHeight - (windowH * 1.6))) {
            footer.style.filter = "blur(8px)";
        } else if (scrollY >= (pageHeight - (windowH * 1.7))) {
            footer.style.filter = "blur(10px)";
        } else if (scrollY >= (pageHeight - (windowH * 1.8))) {
            footer.style.filter = "blur(12px)";
        }
    });
}