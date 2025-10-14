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
        <div class="carousel">
    <div class="carousel-track skills">
<img src="src/assets/techStack/1.png" alt="Responsive Design" class="skillIcon"></img>
<img src="src/assets/techStack/2.png" alt="Clean Code" class="skillIcon"></img>
<img src="src/assets/techStack/3.png" alt="API Integration" class="skillIcon"></img>
<img src="src/assets/techStack/4.png" alt="UI/UX" class="skillIcon"></img>
<img src="src/assets/techStack/5.png" alt="Git Workflow" class="skillIcon"></img>
<img src="src/assets/techStack/6.png" alt="State Management" class="skillIcon"></img>
<img src="src/assets/techStack/7.png" alt="Debugging" class="skillIcon"></img>
<img src="src/assets/techStack/8.png" alt="Performance" class="skillIcon"></img>
<img src="src/assets/techStack/9.png" alt="Reusable Components" class="skillIcon"></img>
<img src="src/assets/techStack/10.png" alt="3D Elements" class="skillIcon"></img>
        
    </div>
    </div>
    `;
    
    const tracks = document.querySelectorAll(".carousel-track");
    tracks.forEach(track => {
    const clone = track.innerHTML;
    track.innerHTML += clone; 
    });
}