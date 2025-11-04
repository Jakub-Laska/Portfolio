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
}