import "./header.css";
const header = document.getElementById("header");

export function initHeader() {
  renderHeader();
  scrollUp();
  animateLogo();
  highlight();
  initBurgerMenu();
  darkmode()
}
// Render header
function renderHeader() {
  header.innerHTML = `
    <div class="headerContainer">
      <div class="header-logo"></div>
    </div>

    <div class="buttonContainer">

      <button class="skipBtn">skip to main content.</button>
      <div id="media">
      <a href="https://github.com/Jakub-Laska" target="_blank">
      <img src="src/assets/header/github.png" alt="github icon" class="mediaIcon"></a>
      <a href="https://www.linkedin.com/in/jakub-laska-b24639324/" target="_blank">
      <img src="src/assets/header/linkedin.png" alt="linkedin icon" class="mediaIcon"></a>
      <a href="mailto:jakub.laska1911@gmail.com">
      <img src="src/assets/header/gmail.png" alt="gmail icon" class="mediaIcon"></a>
      </div>
      <a class="downloadBtn" href="https://jakub-laska.github.io/Resume/" target="_blank">download my cv.</a>
            <div class="darkmodeContainer">
      <button class="darkmodeBtn">dark</button>
      </div>
    </div>

    `;
}
// on click scroll to the top
// function scrollUp() {
//   const headerLogo = document.querySelector(".header-logo");
//   if (!headerLogo) return;

//   headerLogo.addEventListener("click", () => {
//     document.body.style.transition = "opacity 0.2s";
//     document.body.style.opacity = "0";
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//       document.body.style.opacity = "1";
//     }, 200);
//   });
// }
function scrollUp() {
      const sticky = document.querySelector('.sticky');
    const scrollStart = sticky.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + sticky.offsetHeight - window.innerHeight;
  const headerLogo = document.querySelector(".header-logo");
  if (!headerLogo) return;

  headerLogo.addEventListener("click", () => {
    const start = window.scrollY;
    const duration = window.scrollY > scrollEnd ? 2000 : 300;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        document.body.style.opacity = "1";
      }
    }

    requestAnimationFrame(animateScroll);
  });
}

// typing animation
function animateLogo() {
  const headerLogo = document.querySelector(".header-logo");
  setTimeout(() => {
    const words = [
      "Hi, I am Jakub Laska.",
      "I am a self-learner.",
      "I enjoy turning ideas into  web projects.",
      "I experiment, solve problems, and keep learning.",
      "I build projects that I am proud to share.",
    ];
    let i = 0; // word index
    let j = 0; // letter index
    let deleting = false;
    function type() {
      const currentWord = words[i];
      if (!deleting) {
        headerLogo.textContent = currentWord.slice(0, j++);
        if (j > currentWord.length) {
          deleting = true;
          setTimeout(type, 1500); // pause before deleting
          return;
        }
      } else {
        headerLogo.textContent = currentWord.slice(0, j--);
        if (j < 0) {
          deleting = false;
          i = (i + 1) % words.length; // move to next word
          j = 0;
        }
      }
      setTimeout(type, deleting ? 80 : 120); // speed
    }

    type();
  }, 3300);
}
// cursor highlight
function highlight() {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight");
  header.prepend(highlight);
  let targetX = -150;
  let currentX = -150;
  function animate() {
    currentX += (targetX - currentX) * 0.2;
    highlight.style.left = currentX + "px";
    requestAnimationFrame(animate);
  }
  animate();
  header.addEventListener("mousemove", (e) => {
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    targetX = x - highlight.offsetWidth / 2;
    highlight.style.opacity = 1;
  });
  header.addEventListener("mouseleave", () => {
    setTimeout(() => {
      targetX = -150;
      highlight.style.opacity = 0;
    }, 300);
  });
}
// burger menu
let burger, buttonContainer;

function initBurgerMenu() {
  burger = document.createElement("div");
  buttonContainer = document.querySelector(".buttonContainer");
  const headerContainer = document.querySelector('.headerContainer');

  burger.classList.add("burger");
  burger.appendChild(document.createElement("span"));
  burger.appendChild(document.createElement("span"));
  burger.appendChild(document.createElement("span"));
  headerContainer.appendChild(burger);

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    buttonContainer.classList.toggle("visible");
  });
}
// darkmode
function darkmode() {
  const darkBtn = document.querySelector('.darkmodeBtn');
  const darkBtnContainer = document.querySelector('.darkmodeContainer');
  let dark = true;
  darkBtn.innerHTML = "dark";
  darkBtnContainer.addEventListener('click', () => {
    darkBtn.classList.toggle('active');
    document.body.classList.toggle('dark'); // your dark mode toggle
    if (dark) { darkBtn.innerHTML = "light" } else { darkBtn.innerHTML = "dark" };
    dark = !dark;
  });
}

