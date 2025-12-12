import "./background.css";
import backgroundHTML from "./background.html?raw";
import { state } from "../../hybridScroll/hybridScroll";

export function initBackground() {
  document.querySelector("#background").innerHTML = backgroundHTML;
  initScrollListener();
  initRandomFlash();
  initScrollShift();
}

function initScrollListener() {
  const gradients = document.querySelectorAll(".background-gradient");
  let ticking = false;
  let lastScrollTime = 0;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking || Date.now() - lastScrollTime < 10000) return;
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

function initRandomFlash() {
  const gradients = document.querySelectorAll(".background-gradient");
  if (!gradients.length) return;

  gradients.forEach((e) => {
    const delay = Math.random() * 30000;
    setTimeout(() => {
      e.classList.add("flash");

      setTimeout(() => {
        e.classList.remove("flash");
      }, 500);
    }, delay);
  });

  setTimeout(initRandomFlash, 30000 + Math.random() * 30000);
}

function randomRGBA() {
  const r = Math.floor(Math.random() * 100);
  const g = Math.floor(Math.random() * 150);
  const b = Math.floor(Math.random() * 256);
  const a = (Math.random() * 0.5 + 0.5).toFixed(2);
  document.documentElement.style.setProperty(
    "--random-color",
    `rgba(${r},${g},${b},${a * 0.5})`
  );
  return `rgba(${r},${g},${b},${a})`;
}

function initScrollShift() {
  let lastScrollY = window.scrollY;
  const elements = document.querySelectorAll(".shift");
  let lastScrollDirection = null;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const delta = window.scrollY - lastScrollY;
          let currentDirection = delta > 0 ? 1 : 0;

          if (!state.isHorizontal) {
            elements.forEach((el) => {
              el.style.setProperty("--x", 0);
            });
          } else {
            elements.forEach((el) => {
              el.style.setProperty("--y", 0);
            });
          }

          if (currentDirection !== lastScrollDirection) {
            if (!state.isHorizontal) {
              elements.forEach((el) => {
                const y = 64;
                el.style.setProperty(
                  "--y",
                  currentDirection ? -y + "px" : y + "px"
                );
              });
            } else {
              elements.forEach((el) => {
                const x = 64;
                el.style.setProperty(
                  "--x",
                  currentDirection ? -x + "px" : x + "px"
                );
              });
            }
            lastScrollDirection = currentDirection;
          }

          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}
