export function setThemeColor(color) {
  const metaTheme = document.getElementById("theme-color");
  if (metaTheme) {
    metaTheme.setAttribute("content", color);
  }
}

const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    setThemeColor("#181819"); // dark mode
  } else {
    setThemeColor("#DADFF7"); // light mode
  }
});
