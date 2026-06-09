import './aboutMe.css';
import aboutMeHtml from "./aboutMe.html?raw";

export function initAboutMe() {
  document.querySelector("#aboutMe").innerHTML = aboutMeHtml;

    }