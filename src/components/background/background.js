import "./background.css";
import backgroundHTML from "./background.html?raw";

export function initBackground() {
  document.querySelector("#background").innerHTML = backgroundHTML;
  initScrollListener();
}

function initScrollListener() {
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
