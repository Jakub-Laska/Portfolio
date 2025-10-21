import './variables.css';

import { initSplashScreen } from './splashScreen.js';
import { initBackground } from './background.js';
import { initHeader } from './header.js';
import { initHero } from './hero.js';
import { initTechStack } from './techStack.js';

function initAll(){
initSplashScreen()
initBackground();
initHeader();
initHero();
initTechStack();
}
initAll();
