let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let ele = document.querySelector(elemento);
    ele.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Ingresa un número entre 1 y 10');