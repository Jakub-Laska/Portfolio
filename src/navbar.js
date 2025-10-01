import "./navbar.css";
const navbar = document.getElementById("navbar");

export function initNavbar() {
  renderNav();
  scrollUp();
  animateLogo();
  highlight();
  initBurgerMenu();
  darkmode()
}
// Render navbar
function renderNav() {
  navbar.innerHTML = `
    <div class="navbar-logo"></div>
    <div class="navbar-burger-menu"></div>

    <div class="buttonContainer">
      <button class="darkmodeBtn">dark</button>
      <button class="skipBtn">skip to main content.</button>
      <div id="media">
      <a href="https://github.com/Jakub-Laska" target="_blank">
      <img src="src/assets/navbar/github.png" alt="github icon" class="mediaIcon"></a>
      <a href="https://www.linkedin.com/in/jakub-laska-b24639324/" target="_blank">
      <img src="src/assets/navbar/linkedin.png" alt="linkedin icon" class="mediaIcon"></a>
      <a href="mailto:jakub.laska1911@gmail.com">
      <img src="src/assets/navbar/gmail.png" alt="gmail icon" class="mediaIcon"></a>
      </div>
      <a class="downloadBtn" href="https://jakub-laska.github.io/Resume/" target="_blank">download my cv.</a>
    </div>

    `;
}
// on click scroll to the top
function scrollUp() {
  const navbarLogo = document.querySelector(".navbar-logo");
  navbarLogo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// typing animation
function animateLogo() {
  const navbarLogo = document.querySelector(".navbar-logo");
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
      navbarLogo.textContent = currentWord.slice(0, j++);
      if (j > currentWord.length) {
        deleting = true;
        setTimeout(type, 1500); // pause before deleting
        return;
      }
    } else {
      navbarLogo.textContent = currentWord.slice(0, j--);
      if (j < 0) {
        deleting = false;
        i = (i + 1) % words.length; // move to next word
        j = 0;
      }
    }
    setTimeout(type, deleting ? 80 : 120); // speed
  }

  type();
}
// cursor highlight
function highlight() {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight");
  navbar.prepend(highlight);
  let targetX = -150;
  let currentX = -150;
  function animate() {
    currentX += (targetX - currentX) * 0.2;
    highlight.style.left = currentX + "px";
    requestAnimationFrame(animate);
  }
  animate();
  navbar.addEventListener("mousemove", (e) => {
    const rect = navbar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    targetX = x - highlight.offsetWidth / 2;
    highlight.style.opacity = 1;
  });
  navbar.addEventListener("mouseleave", () => {
    setTimeout(() => {
      targetX = -150;
      highlight.style.opacity = 0;
    }, 300);
  });
}
// burger menu
function initBurgerMenu() {
  const burger = document.createElement("div");
  burger.classList.add("burger");
  burger.appendChild(document.createElement("span"));
  burger.appendChild(document.createElement("span"));
  burger.appendChild(document.createElement("span"));
  navbar.appendChild(burger);
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
}
// darkmode
function darkmode(){
  const darkBtn = document.querySelector('.darkmodeBtn');
  let dark = true;
  darkBtn.innerHTML = "dark";
darkBtn.addEventListener('click', () => {
  darkBtn.classList.toggle('active');
  document.body.classList.toggle('dark'); // your dark mode toggle
  if (dark) {darkBtn.innerHTML = "light"} else {darkBtn.innerHTML = "dark"};
  dark = !dark;
});
}
