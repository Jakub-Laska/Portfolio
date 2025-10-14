import "./techStack.css";
const techStack = document.querySelector(".tech-stack");

export function initTechStack() {
    renderTechStack();

}
function renderTechStack() {
    techStack.innerHTML = `
    <p>Tech Stack</p>
    <div class="carousel">
    <div class="carousel-track">
        <img src="src/assets/techStack/js.png" alt="js icon" class="techIcon"></img>
        <img src="src/assets/techStack/vue.png" alt="vue icon" class="techIcon"></img>
        <img src="src/assets/techStack/html.png" alt="html icon" class="techIcon"></img>
        <img src="src/assets/techStack/css.png" alt="css icon" class="techIcon"></img>
        <img src="src/assets/techStack/react.png" alt="react icon" class="techIcon"></img>
        <img src="src/assets/techStack/figma.png" alt="figma icon" class="techIcon"></img>
        <img src="src/assets/techStack/spline.png" alt="spline icon" class="techIcon"></img>
        <img src="src/assets/techStack/git.png" alt="git icon" class="techIcon"></img>
        <img src="src/assets/techStack/vite.png" alt="vite icon" class="techIcon"></img>
        <img src="src/assets/techStack/node.png" alt="node icon" class="techIcon"></img>
        
    </div>
    </div>
    `;
    
    const track = document.querySelector(".carousel-track");
    const clone = track.innerHTML;
    track.innerHTML += clone;
}