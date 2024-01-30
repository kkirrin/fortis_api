import { initNav } from "./module/nav.js";
import { initScroll } from "./module/scroll.js";
import { initObserver } from "./module/observer.js";
import { initObserverAbout } from "./module/observerAbout.js";
import { initPopup } from "./module/popup.js";
import { initTrackingPrompt } from "./module/tracking_prompt.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initScroll();
    baguetteBox.run('.gallery-wrapper');
    initObserver();
    initObserverAbout();
    initPopup();
    initTrackingPrompt();
    

});
