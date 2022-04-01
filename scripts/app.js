//EFEITO 
const titulo = document.querySelector('#Home p');

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 100*i)
    });


}
typeWriter(titulo)

// BOTÃO ACTIVE NAV-BAR
const ButtomNavHome = document.getElementById("home_");
const ButtomNavSobre = document.getElementById("sobre_");
const ButtomNavProjeto = document.getElementById("projeto_");
const ButtomNavContato = document.getElementById("contato_");

ButtomNavHome.addEventListener("click", () => {
    ButtomNavHome.classList.add("active")
    ButtomNavSobre.classList.remove("active")
    ButtomNavProjeto.classList.remove("active")
    ButtomNavContato.classList.remove("active")
})

ButtomNavSobre.addEventListener("click", () => {
    ButtomNavHome.classList.remove("active")
    ButtomNavSobre.classList.add("active")
    ButtomNavProjeto.classList.remove("active")
    ButtomNavContato.classList.remove("active")
})

ButtomNavProjeto.addEventListener("click", () => {
    ButtomNavHome.classList.remove("active")
    ButtomNavSobre.classList.remove("active")
    ButtomNavProjeto.classList.add("active")
    ButtomNavContato.classList.remove("active")
})

ButtomNavContato.addEventListener("click", () => {
    ButtomNavHome.classList.remove("active")
    ButtomNavSobre.classList.remove("active")
    ButtomNavProjeto.classList.remove("active")
    ButtomNavContato.classList.add("active")
})


// BOTAO ACTIVE

const Buttom1 = document.getElementById("btn-site");
const Buttom2 = document.getElementById("btn-jogo");

Buttom2.addEventListener("click", () => {
    Buttom1.classList.remove("active")
    Buttom2.classList.add("active")
})

Buttom1.addEventListener("click", () => {
    Buttom2.classList.remove("active")
    Buttom1.classList.add("active")
})