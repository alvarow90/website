// Obtener referencia al elemento de pantalla y al historial
let pantalla = document.getElementById("pantalla");
let historial = document.getElementById("historial");
let recienCalculado = false;

// Variables para mantener el estado actual de la operación y el historial
let operacionActual = "";
let historialOperaciones = [];

// Función para limpiar la pantalla y reiniciar la operación actual
function limpiarPantalla() {
  pantalla.value = "";
  operacionActual = "";
}

// Función para agregar un número a la operación actual y actualizar la pantalla
function agregarNumero(num) {
  operacionActual += num;
  pantalla.value = operacionActual;
}

// Función para agregar un operador a la operación actual y actualizar la pantalla
function agregarOperador(operador) {
  operacionActual += ` ${operador} `;
  pantalla.value = operacionActual;
}

// Función para calcular el resultado de la operación actual
function calcular() {
  try {
    // Utiliza eval() para calcular el resultado
    let resultado = eval(operacionActual);
    pantalla.value = resultado;
    agregarHistorial(operacionActual, resultado);  // Agregar al historial
    ultimaOperacion = operacionActual;  // Guardar la última operación
    operacionActual = resultado;  // Actualizar la operación actual al resultado
  } catch (e) {
    pantalla.value = "Error";
  }
}

// Función para agregar un punto decimal a la operación actual
function agregarPunto() {
  operacionActual += ".";
  pantalla.value = operacionActual;
}

// Función para calcular la raíz cuadrada del valor actual
function calcularRaizCuadrada() {
  try {
    let resultado = Math.sqrt(eval(operacionActual));
    pantalla.value = resultado;
    agregarHistorial(`√(${operacionActual})`, resultado);
    operacionActual = resultado;
  } catch (e) {
    pantalla.value = "Error";
  }
}

// Función para elevar al cuadrado el valor actual
function calcularCuadrado() {
  try {
    let resultado = Math.pow(eval(operacionActual), 2);
    pantalla.value = resultado;
    agregarHistorial(`(${operacionActual})²`, resultado);
    operacionActual = resultado;
  } catch (e) {
    pantalla.value = "Error";
  }
}

// Función para calcular el logaritmo natural del valor actual
function calcularLog() {
  try {
    let resultado = Math.log(eval(operacionActual));
    pantalla.value = resultado;
    agregarHistorial(`log(${operacionActual})`, resultado);
    operacionActual = resultado;
  } catch (e) {
    pantalla.value = "Error";
  }
}

// Función para agregar una operación y su resultado al historial
function agregarHistorial(operacion, resultado) {
  historialOperaciones.push(`${operacion} = ${resultado}`);
  actualizarHistorial();
}

// Función para actualizar la visualización del historial en la página
function actualizarHistorial() {
  historial.innerHTML = "";
  for (let i = historialOperaciones.length - 1; i >= 0; i--) {
    historial.innerHTML += `<div>${historialOperaciones[i]}</div>`;
  }
}

// Variable para mantener la última operación realizada
let ultimaOperacion = "";

// Función para mostrar la última operación en la pantalla
function mostrarUltimaOperacion() {
  if (ultimaOperacion !== "") {
    operacionActual = ultimaOperacion;
    pantalla.value = operacionActual;
  } else {
    pantalla.value = "Sin última operación";
  }
}

document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "0":
        agregarNumero(0);
        break;
      case "1":
        agregarNumero(1);
        break;
      case "2":
        agregarNumero(2);
        break;
      case "3":
        agregarNumero(3);
        break;
      case "4":
        agregarNumero(4);
        break;
      case "5":
        agregarNumero(5);
        break;
      case "6":
        agregarNumero(6);
        break;
      case "7":
        agregarNumero(7);
        break;
      case "8":
        agregarNumero(8);
        break;
      case "9":
        agregarNumero(9);
        break;
      case "+":
        agregarOperador('+');
        break;
      case "-":
        agregarOperador('-');
        break;
      case "*":
        agregarOperador('*');
        break;
      case "/":
        agregarOperador('/');
        break;
      case ".":
        agregarPunto();
        break;
      case "Enter":
        calcular();
        break;
      case "c": //  'c' para limpiar
        limpiarPantalla();
        break;
      
      default:
        break;
    }
  });
  
  function borrarUltimoCaracter() {
    operacionActual = operacionActual.slice(0, -1);
    pantalla.value = operacionActual;
  }
  
  document.addEventListener("keydown", function(event) {
    switch (event.key) {
      // ... (otros casos)
      case "Backspace":
        borrarUltimoCaracter();
        break;
      // ... (otros casos)
    }
  });
  