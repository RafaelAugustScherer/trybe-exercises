/* 3 */

const clickyButton = document.getElementById('clicky-button');
const clickyCounter = document.getElementById('clicky-counter');
let clickCount = 0;

clickyButton.addEventListener('click', () => {
    clickCount += 1;
    clickyCounter.innerText = clickCount;
});