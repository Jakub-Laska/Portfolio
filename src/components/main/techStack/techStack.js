import "./techStack.css";
import techStackHtml from "./techStack.html?raw";

export function initTechStack() {
  document.querySelector("#techStack").innerHTML = techStackHtml;

  const tracks = document.querySelectorAll(".carousel-track");
  tracks.forEach((track) => {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  });
}
