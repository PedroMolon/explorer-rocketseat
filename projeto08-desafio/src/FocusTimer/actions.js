import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');
  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
}

export function sumTime() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.sumTime();
}

export function subtractTime() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.subtractTime();
}

export function toggleFlorest() {
  let tree = document.querySelector('#tree');
  tree.classList.toggle('tree-color');
    state.isMute = !state.isMute;
    if(state.isMute == false) {
      sounds.florest.play();
      return;
    }

    sounds.florest.pause();
}

export function toggleCloudRain() {
  let cloudRain = document.querySelector('#cloudRain');
  cloudRain.classList.toggle('cloud-rain-color');;
  state.isMute = !state.isMute;
  if(state.isMute == false) {
      sounds.rain.play();
      return;
  }

  sounds.rain.pause();
}

export function toggleStoreFront() {
  let storeFront = document.querySelector('#storeFront');
  storeFront.classList.toggle('store-front-color');;
  state.isMute = !state.isMute;
  if(state.isMute == false) {
      sounds.coffeShop.play();
      return;
  }

  sounds.coffeShop.pause();
}

export function toggleFirePlace() {
  let firePlace = document.querySelector('#firePlace');
  firePlace.classList.toggle('fire-place-color');;
  state.isMute = !state.isMute;
  if(state.isMute == false) {
      sounds.firePlace.play();
      return;
  }

  sounds.firePlace.pause();
}