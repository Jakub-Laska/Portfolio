import "./footer.css";

export function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
    <p>lorem</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, at possimus incidunt commodi voluptas doloribus
    voluptatibus quidem dignissimos esse, sequi quis. Necessitatibus id cum provident est, sapiente ipsa voluptas accusamus?</p>
    <p class="name">jakub laska<span>.</span></p>
    `;
}