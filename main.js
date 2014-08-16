blue = 0
red = 0
green = 0

window.onkeydown = function(event) {
  blueElement = document.querySelector('.blue')
  redElement = document.querySelector('.red')
  greenElement = document.querySelector('.green')

  if (event.keyCode == 'B'.charCodeAt(0)) {
    blueElement.innerText = ++blue;
  }
  else if (event.keyCode == 'R'.charCodeAt(0)) {
    redElement.innerText = ++red;
  }
  else if (event.keyCode == 'G'.charCodeAt(0)) {
    greenElement.innerText = ++green;
  }
}
