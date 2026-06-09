import './main.css';

import { initWelcome } from './welcome/welcome.js';
import { initAboutMe } from './aboutMe/aboutMe.js';
import { initSpline } from './spline/spline.js';
import { initTechStack } from './techStack/techStack.js';
import { initOccupation } from './occupation/occupation.js';
import { initProjects } from './projects/projects.js';

export function initMain() {
    initWelcome();
    initAboutMe();
    initProjects();
    initSpline();
    initTechStack();
    initOccupation();
}