let redBtn = document.querySelector('.red')
let blueBtn = document.querySelector('.blue')
let block = document.querySelector('.block')

function setBlue() {
  block.classList.remove('block_red')
  block.classList.add('block_blue')
}

function setRed() {
  block.classList.remove('block_blue')
  block.classList.add('block_red')
}

redBtn.addEventListener('click', setRed )
blueBtn.addEventListener('click', setBlue)
