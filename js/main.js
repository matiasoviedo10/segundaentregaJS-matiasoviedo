alert("¡Bienvenido al MundoMagico!");

// Tema de Colores
const palabrasColores = [
    { palabra: "rojo", descripcion: "Un color cálido y brillante." },
    { palabra: "azul", descripcion: "Un color que representa el cielo y el mar." },
    { palabra: "verde", descripcion: "Un color asociado con la naturaleza y la esperanza." },
    { palabra: "amarillo", descripcion: "Un color brillante y alegre." },
    { palabra: "naranja", descripcion: "Un color vibrante y lleno de energía." },
    { palabra: "morado", descripcion: "Un color misterioso y elegante." },
    { palabra: "rosa", descripcion: "Un color suave y romántico." },
    { palabra: "gris", descripcion: "Un color neutro y sofisticado." },
    { palabra: "blanco", descripcion: "Un color puro y limpio." },
    { palabra: "negro", descripcion: "Un color elegante y misterioso." },
];

// Tema de Frutas
const palabrasFrutas = [
    { palabra: "manzana", descripcion: "Una fruta roja y jugosa." },
    { palabra: "plátano", descripcion: "Una fruta amarilla y dulce." },
    { palabra: "naranja", descripcion: "Una fruta cítrica y refrescante." },
    { palabra: "uva", descripcion: "Una fruta pequeña y jugosa que puede ser verde o morada." },
    { palabra: "sandía", descripcion: "Una fruta grande y refrescante, con pulpa roja y semillas negras." },
    { palabra: "fresa", descripcion: "Una fruta pequeña y roja, con sabor dulce y ácido." },
    { palabra: "mango", descripcion: "Una fruta tropical de color amarillo y sabor dulce." },
    { palabra: "piña", descripcion: "Una fruta tropical y jugosa, con sabor dulce y ácido." },
    { palabra: "kiwi", descripcion: "Una fruta pequeña y verde, con sabor refrescante." },
    { palabra: "pera", descripcion: "Una fruta jugosa y de forma alargada." },
];

// Tema de Animales
const palabrasAnimales = [
    { palabra: "perro", descripcion: "Un amigo fiel del hombre." },
    { palabra: "gato", descripcion: "Un felino independiente y cariñoso." },
    { palabra: "elefante", descripcion: "Un animal de gran tamaño con trompa." },
    { palabra: "león", descripcion: "El rey de la selva." },
    { palabra: "jirafa", descripcion: "Un animal con cuello largo." },
    { palabra: "tigre", descripcion: "Un felino rayado y feroz." },
    { palabra: "oso", descripcion: "Un animal grande y peludo." },
    { palabra: "mono", descripcion: "Un primate juguetón." },
    { palabra: "delfín", descripcion: "Un mamífero marino inteligente." },
    { palabra: "pingüino", descripcion: "Un ave que vive en el hielo." },
];

// Tema de Cosas en una Ciudad
const palabrasCiudad = [
    { palabra: "parque", descripcion: "Un lugar verde y relajante para el esparcimiento." },
    { palabra: "biblioteca", descripcion: "Un lugar para leer y obtener información." },
    { palabra: "hospital", descripcion: "Un lugar para recibir atención médica." },
    { palabra: "escuela", descripcion: "Un lugar para estudiar y aprender." },
    { palabra: "supermercado", descripcion: "Un lugar para comprar alimentos y otros productos." },
    { palabra: "teatro", descripcion: "Un lugar para disfrutar de obras y espectáculos." },
    { palabra: "cafetería", descripcion: "Un lugar para tomar café y merendar." },
    { palabra: "estación", descripcion: "Un lugar donde llegan y salen trenes o autobuses." },
    { palabra: "iglesia", descripcion: "Un lugar de culto y oración." },
    { palabra: "museo", descripcion: "Un lugar para apreciar arte y objetos históricos." },
];

// Tema de Países
const palabrasPaises = [
    { palabra: "estadosunidos", descripcion: "Un país grande y diverso en América del Norte." },
    { palabra: "japon", descripcion: "Un país insular en el este de Asia, conocido por su cultura única." },
    { palabra: "italia", descripcion: "Un país europeo famoso por su gastronomía y arte." },
    { palabra: "brasil", descripcion: "Un país sudamericano conocido por su cultura y fútbol." },
    { palabra: "australia", descripcion: "Un país y continente rodeado de océanos, conocido por su fauna única." },
    { palabra: "india", descripcion: "Un país en el sur de Asia, famoso por su rica historia y cultura." },
    { palabra: "egipto", descripcion: "Un país africano conocido por sus antiguas pirámides y tesoros arqueológicos." },
    { palabra: "rusia", descripcion: "Un país transcontinental que se extiende desde Europa del Este hasta Asia del Norte." },
    { palabra: "canada", descripcion: "Un país norteamericano conocido por su belleza natural y vastos paisajes." },
    { palabra: "argentina", descripcion: "Un país sudamericano famoso por su tango y cultura gauchesca." },
];

// Variables globales
let tema = [];

// Función para la tematica
function elegirTematica() {
    tema = prompt("Elige una temática:\nColores\nFrutas\nAnimales\nCosas de una ciudad\nPaises").toLowerCase();
    switch (tema) {
        case "colores":
            return palabrasColores;
        case "frutas":
            return palabrasFrutas;
        case "animales":
            return palabrasAnimales;
        case "cosas de una ciudad":
            return palabrasCiudad;
        case "paises":
            return palabrasPaises;
        default:
            alert("Opción inválida. Seleccionando temática por defecto (Colores).");
            return palabrasColores;
    }
}

// Función para la palabra aleatoria de la temática
function seleccionarPalabra() {
    const tematicaSeleccionada = elegirTematica();
    const eleccionAleatoria = Math.floor(Math.random() * tematicaSeleccionada.length);
    return tematicaSeleccionada[eleccionAleatoria].palabra;
}

// Función para ocultar la palabra ya seleccionada
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
    console.log("Tematica de palabras," + tema);
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
    console.log("¡VAMOOOOOO! Le pegaste a la palabra, GANADOR!!!!:\nLa palabra es: " + palabraSeleccionada);
    } else {
    console.log("¡BUUUUUUU! Se te acabo la vida, BYE!!!: \nLa palabra es: " + palabraSeleccionada);
    }
}

// Iniciar el juego
jugarAhorcado();