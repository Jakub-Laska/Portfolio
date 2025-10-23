import './variables.css';

import { initSplashScreen } from './splashScreen.js';
import { initBackground } from './background.js';
import { initHeader } from './header.js';
import { initMain } from './main.js';

function initAll(){
initSplashScreen()
initBackground();
initHeader();
initMain();
}
initAll();
