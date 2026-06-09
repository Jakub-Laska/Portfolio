import "./footer.css";
import footerHtml from "./footer.html?raw";

export function initFooter() {
  document.getElementById("footer").innerHTML = footerHtml;
  initScrollListener();
  initRandomQuote();
document.addEventListener("DOMContentLoaded", initDoNotClickButton);


}

function initScrollListener() {
  window.addEventListener("scroll", onScroll);
}

let ticking = false;
let lastScrollTime = 0;
function onScroll() {
  if (
    window.scrollY <=
    document.documentElement.scrollHeight - window.innerHeight * 2
  )
    return;
  const footer = document.getElementById("footer");
  if (!footer) return;
  if (ticking || Date.now() - lastScrollTime < 16) return;
  lastScrollTime = Date.now();
  ticking = true;
  const scrollY = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const windowH = window.innerHeight;
  console.log("fire");
  requestAnimationFrame(() => {
    if (scrollY >= pageHeight - windowH * 1.3) {
      footer.style.opacity = "1";
    } else if (scrollY >= pageHeight - windowH * 1.4) {
      footer.style.opacity = "0.8";
    } else if (scrollY >= pageHeight - windowH * 1.5) {
      footer.style.opacity = "0.6";
    } else if (scrollY >= pageHeight - windowH * 1.6) {
      footer.style.opacity = "0.4";
    } else if (scrollY >= pageHeight - windowH * 1.7) {
      footer.style.opacity = "0.2";
    } else if (scrollY >= pageHeight - windowH * 2) {
      footer.style.opacity = "0";
    }
    ticking = false;
  });
}

function initRandomQuote() {
  document
    .getElementById("random-quote-btn")
    .addEventListener("click", async () => {
      const res = await fetch(
        `https://random-quotes-api-five.vercel.app/api/quote?t=${Date.now()}`
      );
      const data = await res.json();

      document.getElementById("quote").textContent = `"${data.quote}"`;
      document.getElementById("author").textContent = `— ${data.author}`;
    });
}

function initDoNotClickButton() {
  const footer = document.querySelector(".footer-container");       
  const button = footer.querySelector(".doNotClick");    

  button.addEventListener("mouseenter", () => {
    // wymiary footera
    const footerRect = footer.getBoundingClientRect();
    
    // losowe położenie w obrębie footera
    const x = Math.random() * (footerRect.width - button.offsetWidth);
    const y = Math.random() * (footerRect.height - button.offsetHeight);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  });
}



