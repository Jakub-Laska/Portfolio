import "./projects.css";
import projectsHtml from "./projects.html?raw";

export function initProjects() {
  document.querySelector("#projects").innerHTML = projectsHtml;
}

