export function inicialize(vector: any[], size: number, value: any) {
  for (let i = 0; i < size; i++) {
    vector[i] = value;
  }
  return vector;
}

// random entre dois numeros
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function animateCSS(element, animationName, callback?, infinite?) {

  const node = typeof element === 'string' ?
  document.querySelector(element) :
  element;

  infinite ?
  node.classList.add('animated', 'infinite', animationName) :
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      if (typeof callback === 'function') { callback(); }
  }
  node.addEventListener('animationend', handleAnimationEnd);
}
