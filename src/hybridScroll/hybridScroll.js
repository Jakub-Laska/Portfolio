import "./hybridScroll.css";

export const state = { isHorizontal: false };

export function initHybridScroll() {
  const stickySection = document.querySelector(".sticky");
  const scrollSection = document.querySelector(".scroll_section");
  const parent = stickySection.parentElement;
  const gradients = document.querySelectorAll(".background-gradient");
  const header = document.getElementById("header");
  const scrollbar = document.querySelector(".fake-scrollbar .bar");
  const fakeScrollbar = document.querySelector(".fake-scrollbar");

  let scrollProgress = 0;

  function updateTransform() {
    const scrollStart = parent.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;
    const maxScroll = scrollEnd - scrollStart;

    if (window.scrollY >= scrollStart && window.scrollY <= scrollEnd) {
      scrollProgress = (window.scrollY - scrollStart) / maxScroll;
      document.body.classList.add("show-scrollbar");
      document.body.classList.add("hide-scrollbar");

      scrollbar.style.width = `${scrollProgress * 100}%`;

      const maxScrollX = scrollSection.scrollWidth - window.innerWidth;
      const translateX = -scrollProgress * maxScrollX;
      scrollSection.style.transform = `translate3d(${translateX}px, 0, 0)`;

      gradients.forEach((element) => {
        updateGradientPositions(element, 1);
      });
      header.style.opacity = "0";
          state.isHorizontal = true;
    } else {
      header.style.opacity = "1";
      document.body.classList.remove("show-scrollbar", "hide-scrollbar");
          state.isHorizontal = false;

      if (window.scrollY <= scrollStart) {
        gradients.forEach((element) => {
          updateGradientPositions(element, 0);
        });
      } else if (
        window.scrollY >=
        document.body.offsetHeight - window.innerHeight * 1.3
      ) {
        gradients.forEach((element) => {
          updateGradientPositions(element, 3);
        });
      } else if (window.scrollY >= scrollEnd) {
        gradients.forEach((element) => {
          updateGradientPositions(element, 2);
        });
      }
    }
  }
  let ticking = false;
  let lastScrollTime = 0;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking || Date.now() - lastScrollTime < 16) return;
      lastScrollTime = Date.now();
      ticking = true;
      const scrollStart = parent.offsetTop + window.innerHeight;
      const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;
      const maxScroll = scrollEnd - scrollStart;
      const progress = Math.min(
        Math.max((window.scrollY - scrollStart) / maxScroll, 0),
        1
      );
      scrollbar.style.width = `${progress * 100}%`;

      requestAnimationFrame(() => {
        updateTransform();
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", updateTransform);
  updateTransform();

  let isDragging = false;
  let startX = 0;
  let startProgress = 0;

  fakeScrollbar.addEventListener("mousedown", (e) => {
    if (!document.body.classList.contains("show-scrollbar")) return;
    isDragging = true;
    startX = e.clientX;
    startProgress = scrollProgress * 100; // w %
    document.body.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const trackWidth = fakeScrollbar.clientWidth;

    const progressDelta = (deltaX / trackWidth) * 100;
    let newProgress = Math.min(Math.max(startProgress + progressDelta, 0), 100);

    const scrollStart = parent.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;
    const maxScrollY = scrollEnd - scrollStart;

    const targetScrollY = scrollStart + maxScrollY * (newProgress / 100);
    window.scrollTo(0, targetScrollY);
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = "";
    }
  });
}

const positionsArray = [
  {
    leftx: "-10vw",
    lefty: "40vh",
    rightx: "100vw",
    righty: "0vh",
    botx: "60vw",
    boty: "100vh",
  },
  {
    leftx: "100vw",
    lefty: "0vh",
    rightx: "60vw",
    righty: "100vh",
    botx: "-10vw",
    boty: "40vh",
  },
  {
    leftx: "60vw",
    lefty: "100vh",
    rightx: "-10vw",
    righty: "40vh",
    botx: "100vw",
    boty: "0vh",
  },
  {
    leftx: "45vw",
    lefty: "0vh",
    rightx: "0vw",
    righty: "0vh",
    botx: "90vw",
    boty: "0vh",
  },
];
function updateGradientPositions(element, state) {
  if (state === 0) {
    element.style.setProperty("--leftx", `${positionsArray[0].leftx}`);
    element.style.setProperty("--lefty", `${positionsArray[0].lefty}`);
    element.style.setProperty("--rightx", `${positionsArray[0].rightx}`);
    element.style.setProperty("--righty", `${positionsArray[0].righty}`);
    element.style.setProperty("--botx", `${positionsArray[0].botx}`);
    element.style.setProperty("--boty", `${positionsArray[0].boty}`);
  } else if (state === 1) {
    element.style.setProperty("--leftx", `${positionsArray[1].leftx}`);
    element.style.setProperty("--lefty", `${positionsArray[1].lefty}`);
    element.style.setProperty("--rightx", `${positionsArray[1].rightx}`);
    element.style.setProperty("--righty", `${positionsArray[1].righty}`);
    element.style.setProperty("--botx", `${positionsArray[1].botx}`);
    element.style.setProperty("--boty", `${positionsArray[1].boty}`);
  } else if (state === 2) {
    element.style.setProperty("--leftx", `${positionsArray[2].leftx}`);
    element.style.setProperty("--lefty", `${positionsArray[2].lefty}`);
    element.style.setProperty("--rightx", `${positionsArray[2].rightx}`);
    element.style.setProperty("--righty", `${positionsArray[2].righty}`);
    element.style.setProperty("--botx", `${positionsArray[2].botx}`);
    element.style.setProperty("--boty", `${positionsArray[2].boty}`);
  } else if (state === 3) {
    element.style.setProperty("--leftx", `${positionsArray[3].leftx}`);
    element.style.setProperty("--lefty", `${positionsArray[3].lefty}`);
    element.style.setProperty("--rightx", `${positionsArray[3].rightx}`);
    element.style.setProperty("--righty", `${positionsArray[3].righty}`);
    element.style.setProperty("--botx", `${positionsArray[3].botx}`);
    element.style.setProperty("--boty", `${positionsArray[3].boty}`);
  }
}
