alert("¡Bienvenido al MundoMagico!");

// Palabras para el ahorcado 
let palabras = ["rojo", "azul", "verde", "violeta", "celeste", "anaranjado", "negro", "blanco", "gris", "amarillo", "marron"];
let mezcladorPalabras = [];

// Funcion para mezclar las palabras
function mezclarPalabras() {
    mezcladorPalabras = palabras.slice(); 

    for (let i = mezcladorPalabras.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mezcladorPalabras[i], mezcladorPalabras[j]] = [mezcladorPalabras[j], mezcladorPalabras[i]];
    }
}

// Función para elegir una palabra aleatoria
function seleccionarPalabra() {
  let eleccionAleatoria = Math.floor(Math.random() * palabras.length);
        return palabras[eleccionAleatoria];
}

// Función para ocultar la palabra seleccionada
function ocultarPalabra(palabra) {
    let palabraOculta = "";
    for (let i = 0; i < palabra.length; i++) {
    palabraOculta += "_";
    }
    return palabraOculta;
}

// Función para mostrar la palabra oculta
function mostrarPalabra(palabraOculta) {
  console.log("La palabra es: " + palabraOculta);
}

// Función para mostrar las letras ya adivinadas
function mostrarLetrasAdivinadas(letrasAdivinadas) {
    console.log("Letras ya usadas: " + letrasAdivinadas.join(", "));
}

// Función para actualizar la palabra oculta con la letra adivinada
function actualizarPalabraOculta(palabra, palabraOculta, letra) {
    let nuevaPalabraOculta = "";
    for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
        nuevaPalabraOculta += letra;
    } else {
        nuevaPalabraOculta += palabraOculta[i];
    }
    }
    return nuevaPalabraOculta;
}

// Función para jugar 
function jugarAhorcado() {
    let palabraSeleccionada = seleccionarPalabra();
    let palabraOculta = ocultarPalabra(palabraSeleccionada);
    let letrasAdivinadas = [];
    let intentos = 7;

    console.log("¡Bienvenidos al juego del ahorcado!");
    console.log("Tematica de palabras, Colores!");
    mostrarPalabra(palabraOculta);

  // Bucle principal 
    while (palabraOculta !== palabraSeleccionada && intentos > 0) {
    let letra = prompt("Ingresa una letra, buena suerte!");

    if (letrasAdivinadas.includes(letra)) {
        console.log("Ya adivinaste esa letra. Proba con otra, dale!");
        continue;
    }

    if (palabraSeleccionada.includes(letra)) {
        console.log("¡Le pegaste a una letra, vamoooo!");
        palabraOculta = actualizarPalabraOculta(palabraSeleccionada, palabraOculta, letra);
    } else {
        console.log("Esa no está, buuuu. ¡Proba con otra, daleeee!");
        intentos--;
    }

    letrasAdivinadas.push(letra);
    mostrarPalabra(palabraOculta);
    mostrarLetrasAdivinadas(letrasAdivinadas);
    console.log("Aqui tu vida, jejeje: " + intentos);
    }

  // Verificar si ganó o perdió
    if (palabraOculta === palabraSeleccionada) {
    console.log("¡VAMOOOOOO! Le pegaste a la palabra, GANADOR!!!!: " + palabraSeleccionada);
    } else {
    console.log("¡BUUUUUUU! Se te acabo la vida, BYE!!!: " + palabraSeleccionada);
    }
}

// Iniciar el juego
jugarAhorcado();