import "./background.css";
export function initBackground() {
  const background = document.getElementById("background");
  background.innerHTML = `
    <div class="background-gradient left"></div>
    <div class="background-gradient bot"></div>
    <div class="background-gradient right"></div>
    <div class="background-grain"></div>
  `;
  const gradients = document.querySelectorAll(".background-gradient");

  let ticking = false;
  let lastScrollTime = 0;

  window.addEventListener(
    "scroll",
    () => {
      if (ticking || Date.now() - lastScrollTime < 400) return;
      lastScrollTime = Date.now();
        ticking = true;
      const scrollY = window.scrollY;
      console.log("bg");

        requestAnimationFrame(() => {
          gradients.forEach((element, i) => {
            const brightness = 1 + Math.sin(scrollY * 0.02 + i) * 0.1;
            const saturate = 1 + Math.sin(scrollY * 0.016 + i) * 0.4;

            element.style.filter = `
      brightness(${brightness})
      saturate(${saturate})
      blur(clamp(16px, 4vw, 64px))
    `;
          });
          ticking = false;
        });
    },
    { passive: true }
  );
}
