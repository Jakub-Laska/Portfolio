import './variables.css';

import { initSplashScreen } from './components/splashScreen/splashScreen.js';
import { initBackground } from './components/background/background.js';
import { initHeader } from './components/header/header.js';
import { initWelcomePage } from './components/welcomePage/welcomePage.js';
import { initMain } from './components/main/main.js';
import { initHybridScroll } from './components/hybridScroll/hybridScroll.js';
import { initFooter } from './components/footer/footer.js';

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
