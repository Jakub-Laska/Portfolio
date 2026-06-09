import './welcome.css';
import welcomeHtml from "./welcome.html?raw";


export function initWelcome() {
  document.querySelector("#welcome").innerHTML = welcomeHtml;

}

