let numeroRandom = 0;
let intentos = 1;
let listaNumerosSorteados = []

let numeroMaximo = 10
const asignarTextoElemento = function(etiqueta, texto) {
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;

}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value)


    if (numeroUsuario === numeroRandom){
        asignarTextoElemento("p", `Acertaste, En hora buena! Numero de intentos: ${intentos} ${intentos === 1 ? "vez" : "veces"}`)

        let botonReinicio = document.getElementById("reiniciar");
        
        botonReinicio.removeAttribute("disabled")
    } else {
        if (numeroUsuario > numeroRandom) {
            asignarTextoElemento("p", "El numero secreto es menor")
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor")
        }

        intentos++;
        limpiarCaja();
    }
 
}

const limpiarCaja = function() {
    let valorCaja = document.getElementById("numeroUsuario")

    valorCaja.value = '';
}

const numeroAleatorio = function() {
    let numeroGenerado = (Math.floor(Math.random() * numeroMaximo) + 1)
    // Si el numero generado esta incluido en la lista

    // Si ya sorteamos todos los numeros

    if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento("p", `Ya se sortearon todos los numeros posibles`)

    } else{
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return numeroAleatorio();
    }  else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
}


}

const cambiarLimite = function() {
    let limite = document.getElementById("numeroUsuario").value;

    numeroMaximo = limite
    reiniciarJuego()
}
const reiniciarJuego = function() {
    // Limpiar la caja
    // Indicar mensaje de inicio
    // Generar numeroAleatorio
    // Deshabilitar boton de nuevo juego
    // Inicializar el numero de intentos
    limpiarCaja();
    
    condicionesIniciales();

    
}

const condicionesIniciales = function() {

    asignarTextoElemento("h1", "Juego del numero secreto")

    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`)

    numeroRandom = numeroAleatorio();

    intentos = 1;

    let botonReinicio = document.getElementById("reiniciar");
        
    botonReinicio.setAttribute("disabled", true)
}


condicionesIniciales()

