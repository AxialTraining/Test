function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AhwIK8ezBl":
        Script1();
        break;
      case "6QThWNNtavC":
        Script2();
        break;
      case "6nOIXjH7fM3":
        Script3();
        break;
      case "5qZJ0ozPAjy":
        Script4();
        break;
      case "5gOJD9VkxcU":
        Script5();
        break;
      case "6U5gynOJLBo":
        Script6();
        break;
      case "6EIc4nZyhSI":
        Script7();
        break;
      case "6pCZ0CFYmcV":
        Script8();
        break;
      case "5gL9hQG2Be7":
        Script9();
        break;
      case "6pxCUPvmhXC":
        Script10();
        break;
      case "68LbGwBtUrw":
        Script11();
        break;
      case "5zixkKHeQzx":
        Script12();
        break;
      case "5n5xP8Qwed7":
        Script13();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();


}

window.Script2 = function()
{
  const target = object('6G05Z3IMXs1');
const duration = 750;
const easing = 'ease-out';
const id = '5cI7NTwBVFx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6OKPz2iXL7J');
const duration = 750;
const easing = 'ease-out';
const id = '638I1gRLldf';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5X38Lm2Kub5');
const duration = 750;
const easing = 'ease-out';
const id = '60mQrF3oSDs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('681BkKnvSog');
const duration = 750;
const easing = 'ease-out';
const id = '68NUtvjiwSu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5tonaBNYZXZ');
const duration = 750;
const easing = 'ease-out';
const id = '5kIoC1y1MPz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6mazMyZCP2y');
const duration = 750;
const easing = 'ease-out';
const id = '5vdwkqBUgjW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('60RXV5TeL5L');
const duration = 750;
const easing = 'ease-out';
const id = '6OBJ9xfrFV0';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5z1Jr5SAegb');
const duration = 750;
const easing = 'ease-out';
const id = '6OlNyp2Vs8T';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6gAFX43tVHy');
const duration = 750;
const easing = 'ease-out';
const id = '6asMgfB0lnI';
const shakeAmount = 2;
const delay = 1000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script12 = function()
{
  const target = object('5ZFiO2bP7tZ');
const duration = 750;
const easing = 'ease-out';
const id = '6XCfXIThskk';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6ERqFrkyzX3');
const duration = 750;
const easing = 'ease-out';
const id = '6asMgfB0lnI';
const shakeAmount = 2;
const delay = 1000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
