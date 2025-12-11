import "./variables.css";

import { initSplashScreen } from "./components/splashScreen/splashScreen.js";
import { initBackground } from "./components/background/background.js";
import { initHeader } from "./components/header/header.js";
import { initWelcomePage } from "./components/welcomePage/welcomePage.js";
import { initMain } from "./components/main/main.js";
import { initHybridScroll } from "./hybridScroll/hybridScroll.js";
import { initFooter } from "./components/footer/footer.js";
import { initCursor } from "./cursor/cursor.js";

function initAll() {
  initSplashScreen();
  initBackground();
  // initWelcomePage();
  initMain();
  initHybridScroll();
  initFooter();
  initHeader();
  initCursor();
}
initAll();
