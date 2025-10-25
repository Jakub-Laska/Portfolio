import './variables.css';

import { initSplashScreen } from './splashScreen.js';
import { initBackground } from './background.js';
import { initHeader } from './header.js';
import { initMain } from './main.js';
import { initHybridScroll } from './hybridScroll.js';

function initAll(){
initSplashScreen()
initBackground();
// initHeader();
initMain();
initHybridScroll();
}
initAll();
