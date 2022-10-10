let text = document.querySelector('h2');

function h2() {
    console.log("мышка в тексте")
}

function noh2() {
    console.log("мышка покинула")
}

text.addEventListener('mouseenter', h2)
text.addEventListener('mouseleave', noh2)
