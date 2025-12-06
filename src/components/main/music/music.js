import "./music.css";
import musicHtml from "./music.html?raw";

export function initMusic() {
    document.getElementById("music").innerHTML = musicHtml;
}