import './variables.css';

import { initSplashScreen } from './splashScreen.js';
import { initBackground } from './background.js';
import { initHeader } from './header.js';
import { initWelcomePage } from './welcomePage.js';
import { initMain } from './main.js';
import { initHybridScroll } from './hybridScroll.js';
import { initFooter } from './footer.js';

function initAll(){
initSplashScreen()
initBackground();
initWelcomePage();
initMain();
initHybridScroll();
initFooter();
initHeader();
}
initAll();
