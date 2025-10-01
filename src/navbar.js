import "./navbar.css";
export function initNavbar() {
  renderNav();
  scrollUp();
  animateLogo();
  highlight();
}
// Render navbar
function renderNav() {
  const navbar = document.getElementById("navbar");
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
  const navbar = document.querySelector("#navbar");
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
