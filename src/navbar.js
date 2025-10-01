import "./navbar.css";
const navbar = document.getElementById("navbar");

export function initNavbar() {
  renderNav();
  scrollUp();
  animateLogo();
  highlight();
  initBurgerMenu()
  initNavBtns()
}
// Render navbar
function renderNav() {
  navbar.innerHTML = `
    <div class="navbar-logo"></div>
    <div class="navbar-burger-menu"></div>
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
  burger.classList.add("burger")
  burger.appendChild(document.createElement("span"));
  burger.appendChild(document.createElement("span"));
  burger.appendChild(document.createElement("span"));
  navbar.appendChild(burger);
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
}
// nav buttons
function initNavBtns() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  buttonContainer.appendChild(document.createElement("button"));
  buttonContainer.appendChild(document.createElement("button"));
  buttonContainer.appendChild(document.createElement("button"));
  const downloadBtn = document.createElement("a")
  downloadBtn.innerHTML = "download my cv";
  downloadBtn.href = 'https://jakub-laska.github.io/Resume/';
  downloadBtn.target = "_blank";
  buttonContainer.appendChild(downloadBtn);



  navbar.appendChild(buttonContainer);
}