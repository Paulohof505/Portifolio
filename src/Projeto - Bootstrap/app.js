const buttom = document.getElementById('mode-selector');
const iconbuttom = document.getElementById('mode-selector_');
const body = document.querySelector('body');

buttom.addEventListener("click", function change(){
    body.classList.toggle("dark-mode")
    if (iconbuttom.classList == 'bi bi-brightness-high-fill'){
        iconbuttom.classList = 'bi bi-brightness-high'
    } else if (iconbuttom.classList == 'bi bi-brightness-high'){
        iconbuttom.classList = 'bi bi-brightness-high-fill'
    }
})

