function asignarTextoElemento(elemento, texto) {
    let ele = document.querySelector(elemento);
    ele.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('Funciona');
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Ingresa un número entre 1 y 10');