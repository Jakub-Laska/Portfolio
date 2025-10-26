import './background.css';
export function initBackground() {
  const background = document.getElementById('background');
  background.innerHTML = `
      <div class="background-gradient left"></div>
      <div class="background-gradient bot"></div>
      <div class="background-gradient right"></div>
  <div class="background-grain"></div>
  `;
  const gradients = document.querySelectorAll(".background-gradient");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    gradients.forEach((element, i) => {
      const brightness = 1 + Math.sin(scrollY * 0.02 + i) * 0.08;
      const saturate = 1 + Math.sin(scrollY * 0.016 + i) * 0.2;


      element.style.filter = `
      brightness(${brightness})
      saturate(${saturate})
      blur(36px)
    `;
    });
  });
}
