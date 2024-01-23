let numeroSecreto = 0;
let intento = 0;

function asignarTextoElemento(elemento, texto) {
    let ele = document.querySelector(elemento);
    ele.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${intento} ${intento === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else  {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intento++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Ingresa un número entre 1 y 10');
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();