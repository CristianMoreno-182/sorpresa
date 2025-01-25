let tiempoRestante = 20 // 60 segundos para el temporizador
let tiempoDisplay = document.getElementById("tiempo");
let botonContainer = document.getElementById("boton-container");

function actualizarTemporizador() {
  let minutos = Math.floor(tiempoRestante / 20);
  let segundos = tiempoRestante % 20;
  
  // Formatear para mostrar siempre 2 dígitos
  tiempoDisplay.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
  if (tiempoRestante <= 0) {
    clearInterval(intervalo);
    botonContainer.style.display = 'block'; // Mostrar el botón
  } else {
    tiempoRestante--;
  }
}

// Iniciar el temporizador
let intervalo = setInterval(actualizarTemporizador, 1000);

// Función para redirigir a otra página
function redirigir() {
 window.location.href = "https://cristianmoreno-182.github.io/happybirthestrellita/ "
}
