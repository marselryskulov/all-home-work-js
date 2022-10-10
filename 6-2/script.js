
let blueBtn = document.querySelector('.blue')
let block = document.querySelector('.block')

function setBlue() {
  block.classList.toggle('block_blue')  
}

blueBtn.addEventListener('click', setBlue)
