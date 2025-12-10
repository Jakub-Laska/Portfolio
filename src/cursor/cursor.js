import "./cursor.css";

const cursor = document.querySelector(".cursor");
const easing = 0.2;
const isMobile = window.innerWidth < 768;
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let isRunning = false;
let rafId = null;
let lastMove = 0;
let lastClick = 0;

document.addEventListener("mousemove", getInitialPosition);

function getInitialPosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

export function initCursor() {
  if (!cursor) return;
  enableCursorOnDesktop();
  window.addEventListener("resize", enableCursorOnDesktop);
  initCursorFade()
}

function enableCursorOnDesktop() {
  if (isMobile) {
    if (isRunning) {
      document.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(rafId);
      cursor.classList.remove("visible");
      isRunning = false;
    }
    return;
  }

  if (!isRunning) {
    const setInitialPosition = (e) => {
      document.removeEventListener("mousemove", getInitialPosition);
      circleX = mouseX;
      circleY = mouseY;
      cursor.classList.add("visible");
      document.addEventListener("mousemove", updateMousePosition);
      initClickEffect();
      rafId = requestAnimationFrame(followCursor);
      isRunning = true;
    };

    document.addEventListener("mousemove", setInitialPosition, { once: true });
  }
}

function updateMousePosition(e) {
  if (Date.now() - lastMove < 16) return;
  lastMove = Date.now();
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function followCursor() {
  circleX += (mouseX - circleX) * easing;
  circleY += (mouseY - circleY) * easing;

  cursor.style.setProperty("--cursorY", `${Math.round(circleY)}px`);
  cursor.style.setProperty("--cursorX", `${Math.round(circleX)}px`);
  requestAnimationFrame(followCursor);
}

function initClickEffect() {
  document.addEventListener("click", () => {
    if (Date.now() - lastClick < 16) return;
    lastClick = Date.now();
    cursor.classList.remove("clicked");

    void cursor.offsetWidth;

    cursor.classList.add("clicked");
  });
}

function initCursorFade() {
    if (isMobile) return;
  const targets = document.querySelectorAll("a, button, [data-cursor]");

  targets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("fade");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("fade");
    });
  });
}
