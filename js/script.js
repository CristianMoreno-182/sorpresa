
let fechaDestino = new Date("March 7, 2025 07:00:00").getTime();
let tiempoDisplay = document.getElementById("tiempo");
let botonContainer = document.getElementById("boton-container");

function actualizarTemporizador() {
  let ahora = new Date().getTime(); // Obtener el tiempo actual
  let tiempoRestante = fechaDestino - ahora; // Calcular el tiempo restante

  if (tiempoRestante <= 0) {
    clearInterval(intervalo); // Detener el temporizador
    botonContainer.style.display = 'block'; // Mostrar el botón
    tiempoDisplay.textContent = "¡Es hora!";
  } else {
    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante en formato "días horas minutos segundos"
    tiempoDisplay.textContent = `${dias}d ${horas.toString().padStart(2, '0')}h ${minutos.toString().padStart(2, '0')}m ${segundos.toString().padStart(2, '0')}s`;
  }
}



// Iniciar el temporizador
let intervalo = setInterval(actualizarTemporizador, 1000);

// Función para redirigir a otra página
function redirigir() {
  window.location.href = "https://cristianmoreno-182.github.io/happybirthestrellita/ "
}
