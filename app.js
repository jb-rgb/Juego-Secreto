let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Si ya sortemaos todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sorteó todos los números posibles');
    }
    // Si el número generado ya está en la lista, lo genero nuevamente
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();