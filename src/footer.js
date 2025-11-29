import "./footer.css";

export function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
    <div class="footer-container">

        <h1>Let's work togheter.</h1>

        <div class="links">

            <div class="contact-links">
                <div>
                    <a href="mailto:jakub.laska@example.com">Email Me</a>
                    <a href="https://www.linkedin.com/in/jakub-laska" target="_blank" rel="noopener">LinkedIn</a>
                    <a href="https://github.com/jakub-laska" target="_blank" rel="noopener">GitHub</a>
                    <a href="tel:+48603355035">+48 603 355 035</a>
                </div>
                <div>
                    <button class>Credits</button>
                    <button>Download CV</button>
                    <button>About This Site</button>
                    <button>Toggle Theme</button>
                </div>
                <div>
                    <button class="footer-btn" data-overlay="meet-cat">Meet My Cat</button>
                    <a href="https://www.figma.com/file/XXXXX" target="_blank" rel="noopener" class="footer-btn">Figma File</a>
                    <button class="footer-btn" data-overlay="api-info">API Info</button>
                    <button class="footer-btn" data-overlay="design-system">Design System</button>
                    </div>
            </div>
            
        </div>

        <div class="footer-bottom">
            <div class="signature">
                <p>Designed and Developed by Jakub Laska.</p>
                <p>52º 10' 52.793" N 21º 1' 36.192" E.</p>
                <p>Since 2025.</p>
            </div>
            <p class="logo">jakub laska<span>.</span></p>
            <div class="quote">
                    <div>
                        <p>Something to reflect on.</p>
                        <button id="random-quote-btn">random quote.</button>
                    </div>
                    <div class="quote-text">
                        <p id="quote"></p>
                        <p id="author"></p>
                    </div>
            </div>
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
    document.getElementById('random-quote-btn').addEventListener('click', async () => {
        const res = await fetch(`https://random-quotes-api-five.vercel.app/api/quote?t=${Date.now()}`);
        const data = await res.json();

        document.getElementById('quote').textContent = `"${data.quote}"`;
        document.getElementById('author').textContent = `— ${data.author}`;
    });
}