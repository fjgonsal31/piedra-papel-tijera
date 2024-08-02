// piedra, papel o tijera
let nombreJug = prompt("¿Cómo te llamas?");
let bPiedra = document.getElementById("piedra");
let bPapel = document.getElementById("papel");
let bTijera = document.getElementById("tijera");
let pEleccion = document.getElementById("eleccion");
let pResultado = document.getElementById("resultado");
let pMarcador = document.getElementById("marcador");
let botElec = [bPiedra.textContent, bPapel.textContent, bTijera.textContent];
let botElecR = null;
let con1 = 0;
let con2 = 0;

pMarcador.textContent = `${nombreJug}: ${con1} --- BOTin: ${con2}`;

function reset() {
    pEleccion.textContent = "";
    botElecR = Math.floor(Math.random() * botElec.length);
}

function piedra() {
    reset();
    pEleccion.textContent = `${nombreJug} ha elegido: ${bPiedra.textContent} --- BOTin eligió: ${botElec[botElecR]}`;

    switch (botElec[botElecR]) {
        case bPiedra.textContent:
            pResultado.textContent = "¡EMPATE!";
            break;
        case bPapel.textContent:
            pResultado.textContent = "¡PERDISTE!";
            con2++;
            break;
        case bTijera.textContent:
            pResultado.textContent = "¡GANASTE!";
            con1++;
            break;
    }

    pMarcador.textContent = `${nombreJug}: ${con1} --- BOTin: ${con2}`;
}

function papel() {
    reset();
    pEleccion.textContent = `${nombreJug} ha elegido: ${bPapel.textContent} --- BOTin eligió: ${botElec[botElecR]}`;

    switch (botElec[botElecR]) {
        case bPiedra.textContent:
            pResultado.textContent = "¡GANASTE!";
            con1++;
            break;
        case bPapel.textContent:
            pResultado.textContent = "¡EMPATE!";
            break;
        case bTijera.textContent:
            pResultado.textContent = "¡PERDISTE!";
            con2++;
            break;
    }

    pMarcador.textContent = `${nombreJug}: ${con1} --- BOTin: ${con2}`;
}

function tijera() {
    reset();
    pEleccion.textContent = `${nombreJug} ha elegido: ${bTijera.textContent} --- BOTin eligió: ${botElec[botElecR]}`;

    switch (botElec[botElecR]) {
        case bPiedra.textContent:
            pResultado.textContent = "¡PERDISTE!";
            con2++;
            break;
        case bPapel.textContent:
            pResultado.textContent = "¡GANASTE!";
            con1++;
            break;
        case bTijera.textContent:
            pResultado.textContent = "¡EMPATE!";
            break;
    }

    pMarcador.textContent = `${nombreJug}: ${con1} --- BOTin: ${con2}`;
}