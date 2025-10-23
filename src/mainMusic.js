import "./mainMusic.css";

export function initMainMusic() {
    const mainMusic = document.getElementById("mainMusic");
    mainMusic.innerHTML = `
    <div class="textContainer">
        <h1>What I listened to while making this</h1>
        <p>Music meets design - here's what it sounded like.</p>
    </div>
        <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4JAvHpjipBk?utm_source=generator" 
        frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
    `;
}