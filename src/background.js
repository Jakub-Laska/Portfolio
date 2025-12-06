import "./background.css";
export function initBackground() {
  const background = document.getElementById("background");
  background.innerHTML = `
    <div class="gradientContainerWiggle">
      <div class="gradientContainer">
        <div class="background-gradient left"></div>
        <div class="background-gradient bot"></div>
        <div class="background-gradient right"></div>
      </div>
    </div>
    <div class="background-grain"></div>
  `;
  const gradients = document.querySelectorAll(".background-gradient");

  let ticking = false;
  let lastScrollTime = 0;

  window.addEventListener(
    "scroll",
    () => {
      if (ticking || Date.now() - lastScrollTime < 5000) return;
      lastScrollTime = Date.now();
        ticking = true;

        requestAnimationFrame(() => {
          gradients.forEach((element) => {
            element.style.background = randomRGBA();
          });
          ticking = false;
        });
    },
    { passive: true }
  );

}

function randomRGBA() {
  const r = Math.floor(Math.random() * 100);
  const g = Math.floor(Math.random() * 150);
  const b = Math.floor(Math.random() * 256);
  const a = (Math.random() * 0.5 + 0.5).toFixed(2);
  return `rgba(${r},${g},${b},${a})`;
}