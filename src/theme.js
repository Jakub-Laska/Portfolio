export function themeToggle() {
  themeToggleSetup();
}

function themeToggleSetup() {
  const toggleThemeBtn = document.querySelectorAll(".toggleTheme");
      let isDark = true;
  const darkBtn = document.querySelector(".headerThemeToggle");

  toggleThemeBtn.forEach((btn) => {
btn.addEventListener("click", () => {
  isDark = !isDark;
  darkBtn.classList.toggle("active");

  if (isDark) {
    document.documentElement.style.setProperty("--black-black", "#000000");
    document.documentElement.style.setProperty("--primary-white", "#DADFF7");
    document.documentElement.style.setProperty("--primary-black", "#181819");
      darkBtn.innerHTML = "dark";

  } else {
    document.documentElement.style.setProperty("--black-black", "#dadff780");
    document.documentElement.style.setProperty("--primary-white", "#000000");
    document.documentElement.style.setProperty("--primary-black", "#DADFF7");
      darkBtn.innerHTML = "light";

  }
});

  });
}